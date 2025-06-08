import { enrollCourse } from "@/services/enrollments";
import React from "react";
import { MapPin } from "lucide-react"; // 위치 아이콘

const CourseItem = ({ course, currentCapa, onEnrollSuccess }) => {
  // 상태 비율 계산
  const capaRate = (currentCapa || 0) / course.capacity;

  const getStatusClass = () => {
    if (currentCapa >= course.capacity) return "gray";
    if (capaRate >= 0.9) return "red";
    if (capaRate >= 0.7) return "orange";
    return "green";
  };

  const currentStatus = getStatusClass();

  // 신청하기 핸들러
  const handleEnroll = async (id) => {
    try {
      const res = await enrollCourse(id);
      alert(`${res.data.courseName} 신청 성공`);
      onEnrollSuccess();
    } catch (error) {
      alert("신청 실패 또는 서버 오류");
    }
  };

  return (
    <div className="flex flex-col justify-between bg-white rounded-lg shadow-md px-4 py-4 w-[260px] h-[226px]">
      {/* 상단 뱃지 영역 */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex justify-center items-center w-[93px] h-[28px] bg-blue-100 text-blue-600 text-sm font-bold rounded-full">
          {course.courseCode}
        </div>
        <div
          className={`flex justify-center items-center w-[70px] h-[28px] text-sm font-bold rounded-full border ${
            currentStatus === "red"
              ? "bg-red-100 text-red-600 border-red-400"
              : currentStatus === "orange"
              ? "bg-orange-100 text-orange-600 border-orange-400"
              : currentStatus === "gray"
              ? "bg-gray-200 text-gray-500 border-gray-300"
              : "bg-green-100 text-green-600 border-green-400"
          }`}
        >
          {currentCapa || 0}/{course.capacity}
        </div>
      </div>

      {/* 강의명 */}
      <div className="font-bold text-lg mb-2">{course.name}</div>

      {/* 교수명 */}
      <div className="text-sm text-gray-500 mb-4">{course.professor}</div>

      {/* 시간 + 위치 */}
      <div className="flex justify-between">
        <div className="text-sm text-gray-500 mb-2">
          {course.time1}
          <br />
          {course?.time2}
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <MapPin size={18} className="mr-1" />
          {course.location}
        </div>
      </div>

      {/* 아래: 학점 + 버튼 */}
      <div className="flex justify-between items-center mt-auto">
        <div className="w-[51px] h-[24px] flex justify-center items-center bg-gray-100 text-sm rounded">
          {course.credit}학점
        </div>

        {/* 버튼 */}
        <button
          onClick={() =>
            currentStatus === "gray" ? null : handleEnroll(course.courseId)
          }
          className={`w-[100px] h-[40px] text-white text-sm font-semibold rounded-full shadow ${
            currentStatus === "gray"
              ? "bg-gray-300 cursor-not-allowed"
              : currentStatus === "red"
              ? "bg-gradient-to-b from-red-400 to-red-500 hover:from-red-500 hover:to-red-600"
              : currentStatus === "orange"
              ? "bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600"
              : "bg-gradient-to-b from-green-400 to-green-500 hover:from-green-500 hover:to-green-600"
          }`}
        >
          {currentStatus === "gray" ? "마감" : "신청하기"}
        </button>
      </div>
    </div>
  );
};

export default CourseItem;
