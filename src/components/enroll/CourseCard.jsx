import React from "react";
import CourseItem from "./CourseItem";
import { useState } from "react";
import { useEffect } from "react";
import { getCredits } from "@/services/student";

const CourseCard = ({ title, courses, isRegister }) => {
  const [credits, setCredits] = useState({
    totalCredit: null,
    maxCredit: null,
    remainingCredit: null,
  });

  const getCreditData = async () => {
    try {
      const res = await getCredits();
      setCredits(res);
    } catch (error) {}
  };

  useEffect(() => {
    getCreditData();
  }, []);

  return (
    <div className="border w-[515px] bg-gray-100 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between border-b-2 border-gray-200 px-4 py-2">
        <div className="text-xl">{title}</div>
        <div>{courses.length}개 강의</div>
      </div>
      <div className="flex border-slate-400 text-sm p-2 text-center text-gray-400">
        <div className="w-[55px]">강의 번호</div>
        <div className="w-[60px]">강의명</div>
        <div className="w-[70px]">교수명</div>
        <div className="w-[85px]">시간</div>
        <div className="w-[70px]">여석현황</div>
        <div className="w-[65px]">강의실</div>
        <div className="w-[40px]">학점</div>
        {/* <div className="w-[60px]">버튼임당</div> */}
      </div>
      <div className="flex flex-col w-full xl:h-[300px] 2xl:h-[550px] justify-between">
        <div className="overflow-scroll rounded-b-xl [&::-webkit-scrollbar]:hidden">
          {courses.map((course) => (
            <CourseItem key={course.courseId} course={course} isRegister={isRegister}/>
          ))}
        </div>
        {isRegister && (
          <div className="flex border-t justify-between text-sm p-3">
            <div>총 학점: {credits.totalCredit}</div>
            <div className="flex gap-4">
              <div>최대 신청 가능 학점: {credits.maxCredit}</div>
              <div>남은 신청 가능 학점: {credits.remainingCredit}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
