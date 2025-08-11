import { useEffect, useMemo, useRef, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";
// import { toast } from "react-toastify";

export const useCapaSSE = ({ courses }) => {
  const [capa, setCapa] = useState([]);
  const esRef = useRef(null);
  const toastOnceRef = useRef(false);

  // 코스 ID만으로 의존 키 생성(정렬 후 조인)
  const depsKey = useMemo(() => {
    if (!courses || courses.length === 0) return "";
    return courses
      .map((c) => Number(c.courseId))
      .sort((a, b) => a - b)
      .join(",");
  }, [courses]);

  useEffect(() => {
    // courses 비었으면 정리
    if (!courses || courses.length === 0) {
      if (esRef.current) {
        esRef.current.close();
        esRef.current = null;
      }
      setCapa([]);
      return;
    }

    // 초기 capa 세팅
    setCapa(
      courses.map((c) => ({
        courseId: c.courseId,
        participant: Number(c.participant ?? 0),
      }))
    );

    // 기존 연결 정리 후 새로 연결
    if (esRef.current) {
      esRef.current.close();
      esRef.current = null;
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("Access token is missing!");
      return;
    }

    const courseIdsQS = courses.map((c) => `courseIds=${c.courseId}`).join("&");
    const base = import.meta.env.VITE_API_BASE_SECURE_SSE_URL;
    const sseUrl = `${base}/api/v1/seats/subscribe?${courseIdsQS}`;

    const es = new EventSourcePolyfill(sseUrl, {
      headers: { Authorization: `Bearer ${token}` },
      heartbeatTimeout: 300000,
      withCredentials: false,
    });
    esRef.current = es;
    toastOnceRef.current = false;

    es.onopen = () => {
      // console.log("SSE open");
      toastOnceRef.current = false;
    };

    es.addEventListener("seat", (event) => {
      try {
        const data = JSON.parse(event.data); // { courseId, remaining }
        setCapa((prev) =>
          prev.map((c) =>
            c.courseId === data.courseId
              ? { ...c, participant: Number(data.remaining) }
              : c
          )
        );
      } catch (e) {
        console.warn("seat event parse error:", e);
      }
    });

    es.onerror = (err) => {
      // 자동 재연결에 맡기고 close() 하지 않음
      console.warn("SSE error (auto-reconnect):", err);
      // if (!toastOnceRef.current) {
      //   toast.error("좌석 정보 연결이 불안정합니다. 자동으로 다시 연결합니다.");
      //   toastOnceRef.current = true;
      // }
    };

    return () => {
      if (esRef.current) {
        esRef.current.close();
        esRef.current = null;
      }
    };
  }, [depsKey]);

  return { capa };
};
