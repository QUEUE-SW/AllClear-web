import CourseItem from "@/components/enroll/CourseItem";
import { useState } from "react";
import { useEffect } from "react";

const CoursesList = ({ courses, onEnrollSuccess }) => {
  const [capa, setCapa] = useState([]);

  useEffect(() => {
    if (!courses || courses.length === 0) return;

    const courseIds = courses.map((c) => `courseIds=${c.courseId}`).join("&");
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if (!token) {
      console.error("Access token is missing!");
    }

    const sseUrl = `${import.meta.env.VITE_API_BASE_SECURE_SSE_URL}/api/v1/seats/subscribe?${courseIds}&token=${token}`;
    // console.log("SSE URL:", sseUrl);
    const eventSource = new EventSource(sseUrl);
    if (!eventSource) return;

    eventSource.onopen = () => {
      console.log("SSE 연결");
    };

    // eventSource.onerror = (e) => {
    //   console.error("SSE Error:", e);
    //   eventSource.close();
    // };

    // 오류 발생 시 SSE 종료
    eventSource.onerror = (err) => {
      console.error("EventSource 에러: ", err);
      toast.error("연결에 문제가 발생했습니다. 다시 시도해주세요.");
      eventSource.close();
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

    return () => eventSource.close();
  }, [courses]);

  return (
    <div
      className="w-[814px] h-[607px] overflow-y-auto
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-gray-400
  [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      <div className="grid grid-cols-3 gap-x-2 gap-y-3">
        {courses?.map((course) => {
          const current = capa.find((c) => c.courseId === course.courseId);
          return (
            <CourseItem
              key={course.courseId}
              course={course}
              currentCapa={current?.participant}
              onEnrollSuccess={onEnrollSuccess}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CoursesList;
