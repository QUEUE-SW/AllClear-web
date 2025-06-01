import { enrollCourse } from "@/services/enrollments";
import React from "react";

const CourseItem = ({ course, currentCapa, isRegister, onEnrollSuccess }) => {
  const statusColor =
    course.status === "red"
      ? "bg-red-500 hover:bg-red-600 hover:shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]"
      : course.status === "orange"
      ? "bg-orange-400 hover:bg-orange-500 hover:shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]"
      : course.status === "gray"
      ? "bg-gray-400 hover:bg-gray-500 hover:shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]"
      : // gray가 아니라면 green ( 기본 status 색은 green )
        "bg-green-400 hover:bg-green-500 hover:shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]";

  const handleEnroll = async (id) => {
    try {
      const res = await enrollCourse(id);
      alert(`${res.data.courseName} 신청 성공`);
      onEnrollSuccess();
    } catch (error) {
      alert("신청 실패 또는 서버 오류");
    }
  };
  const handleCancel = (id) => {
    console.log(id);
  };

  return (
    <div className="flex p-2 h-20 text-sm items-center text-center bg-white border-gray-200 border-b">
      <div className="w-[55px]">{course.courseCode}</div>
      <div className="w-[60px]">{course.name}</div>
      <div className="w-[70px]">{course.professor}</div>
      <div className="w-[85px] text-xs">
        {course.time1}
        <br />
        {course?.time2}
      </div>
      <div className="w-[70px]">
        {currentCapa || course.capacity}/{course.capacity}
      </div>
      <div className="w-[65px]">{course.location}</div>
      <div className="w-[40px]">{course.credit}</div>
      {!isRegister ? (
        <button
          onClick={() => handleEnroll(course.courseId)}
          className={`w-[50px] ${statusColor} text-white rounded-xl px-1 py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)]`}
        >
          신청
        </button>
      ) : (
        <button
          onClick={() => handleCancel(course.enrollmentId)}
          className="w-[50px] bg-black hover:bg-gray-400 text-white rounded-xl px-1 py-2 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] hover:shadow-[inset_0px_4px_4px_rgba(0,0,0,0.25)]"
        >
          취소
        </button>
      )}
    </div>
  );
};

export default CourseItem;
