import React from "react";
import { MapPin } from "lucide-react";

const RegisteredCourseItem = ({ course, onCancel }) => {
  return (
    <div className="w-[352px] h-[136px] flex justify-between px-3 py-3 bg-gray-50 rounded-lg border border-gray-200">
      {/* 좌측 정보 */}
      <div className="flex flex-col">
        <div className="flex gap-2">
          <div className="flex justify-center items-center w-[78px] h-[24px] bg-blue-100 text-blue-600 text-sm font-bold">
            {course.courseCode}
          </div>
          <div className="w-[51px] h-[24px] flex justify-center items-center bg-gray-100 text-sm">
            {course.credit}학점
          </div>
        </div>

        <div className="font-bold text-gray-800">{course.name}</div>
        <div className="text-sm text-gray-500">{course.professor}</div>
        <div className="text-sm text-gray-500">
          {course.time1} {course?.time2 && `${course.time2}`}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin size={18} className="mr-1" />
          {course.location}
        </div>
      </div>

      {/* 우측 정보 */}
      <div className="flex flex-col justify-end">
        <button
          onClick={() => onCancel(course.enrollmentId)}
          className="w-[52px] h-[28px] text-sm text-white bg-black border rounded-full"
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default RegisteredCourseItem;
