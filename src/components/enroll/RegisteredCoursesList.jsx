import React, { useEffect, useState } from "react";
import { getCapacities } from "@/services/courses";
import { BookOpen } from "lucide-react"; // 상단 아이콘 예시
import RegisteredCourseItem from "./RegisteredCourseItem";

const RegisteredCoursesList = ({ courses }) => {
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
    <div className="flex flex-col w-[394px] h-[692px] bg-white rounded-lg shadow-md overflow-hidden">
      {/* 상단 제목 */}
      <div className="flex items-center gap-2 bg-green-50 px-4 py-3 text-green-800 font-bold text-lg">
        <BookOpen size={20} />
        수강 현황
      </div>

      {/* 내용 영역 - 스크롤 */}
      <div
        className="flex flex-col gap-4 px-4 py-3 overflow-y-auto
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-thumb]:bg-gray-400
          [&::-webkit-scrollbar-track]:bg-transparent"
      >
        {/* TODO: CourseItem 영역 */}
        {courses?.map((course) => {
          const current = capa.find((c) => c.courseId === course.courseId);
          return (
            <RegisteredCourseItem
              key={course.courseId}
              course={course}
              currentCapa={current?.current}
              onCancel={(id) => {
                console.log("취소 클릭:", id);
                // TODO: 취소 API 연결
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RegisteredCoursesList;
