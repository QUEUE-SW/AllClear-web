import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import { getCapacities } from "@/services/courses";

const CoursesList = ({ courses, onEnrollSuccess }) => {
  const [capa, setCapa] = useState([]);

  const getCurrentCapa = async () => {
    try {
      const ids = courses.map((c) => c.courseId);
      const res = await getCapacities(ids);
      setCapa(res);
    } catch (error) {
      console.error("수강신청 인원 조회 실패", error);
    }
  };

  useEffect(() => {
    getCurrentCapa();
  }, [courses]);

  return (
    <div className="w-[814px] h-[607px] grid grid-cols-3 gap-2 overflow-y-auto">
      {courses?.map((course) => {
        const current = capa.find((c) => c.courseId === course.courseId);
        return (
          <CourseItem
            key={course.courseId}
            course={course}
            currentCapa={current?.current}
            onEnrollSuccess={onEnrollSuccess}
          />
        );
      })}
    </div>
  );
};

export default CoursesList;
