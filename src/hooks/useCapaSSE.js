import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

export const useCapaSSE = ({ courses }) => {
  const [capa, setCapa] = useState(courses);

  useEffect(() => {
    let eventSource;
    // 기존 연결 닫기
    if (eventSource) {
      eventSource.close();
    }

    if (!courses || courses.length === 0) return;
    // 초기 capa 세팅
    setCapa(
      courses.map((c) => ({
        courseId: c.courseId,
        participant: c.participant ?? 0,
      }))
    );
    const courseIds = courses.map((c) => `courseIds=${c.courseId}`).join("&");
    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.error("Access token is missing!");
      return;
    }
    const sseUrl = `${
      import.meta.env.VITE_API_BASE_SECURE_SSE_URL
    }/api/v1/seats/subscribe?${courseIds}`;

    eventSource = new EventSourcePolyfill(sseUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!eventSource) return;

    eventSource.onopen = () => {
      console.log("SSE 연결");
    };

    eventSource.addEventListener("seat", (event) => {
      const data = JSON.parse(event.data);
      console.log("seat 데이터: ", data);
      setCapa((prevCapa) =>
        prevCapa.map((capa) =>
          capa.courseId === data.courseId
            ? { ...capa, participant: data.remaining }
            : capa
        )
      );
    });

    // 오류 발생 시 SSE 종료
    eventSource.onerror = (err) => {
      console.error("EventSource 에러: ", err);
      toast.error("연결에 문제가 발생했습니다. 다시 시도해주세요.");
      eventSource.close();
    };
    return () => eventSource.close();
  }, [courses]);

  return { capa };
};
