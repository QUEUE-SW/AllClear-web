import CourseItem from "@/components/enroll/CourseItem";
import { useState } from "react";
import { useEffect } from "react";

const CoursesList = ({ courses, capacities, onEnrollSuccess }) => {
  const [capa, setCapa] = useState(capacities || []);

  useEffect(() => {
    if (!courses) return;

    const courseIds = courses.map((c) => `courseIds=${c.courseId}`).join("&");

    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_BASE_SECURE_SSE_URL}/api/v1/seats/subscribe?${courseIds}`
    );

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
