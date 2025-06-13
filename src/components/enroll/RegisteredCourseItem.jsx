import React from "react";
import { MapPin } from "lucide-react";
import { cancelEnrollment } from "@/services/enrollments";
import { toast } from "react-toastify";

const RegisteredCourseItem = ({ course, onCancelSuccess }) => {
  const handleCancel = async () => {
    try {
      const res = await cancelEnrollment(course.enrollmentId);
      const courseName = course.name;

      toast.success(`${courseName} 수강 취소 완료`);

      onCancelSuccess?.(); // 상위 콜백 호출
    } catch (error) {
      const code = error?.response?.data?.code;
      const status = error?.response?.status;

      if (status === 401 && code === "4012") {
        toast.error("다른 학생의 수강정보는 취소할 수 없습니다.");
      } else if (status === 404 && code === "4040") {
        toast.error("수강 정보를 찾을 수 없습니다.");
      } else {
        toast.error("수강 취소 실패: 서버 오류");
      }
    }
  };

  const onCancel = async () => {
    handleCancel();
  };
  return (
    <div className="w-[352px] h-[136px] flex justify-between px-3 py-3 bg-gray-50 rounded-lg border border-gray-200 hover:-translate-y-1 transition-transform duration-200 ease-in-out hover:shadow-lg">
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
          onClick={onCancel}
          className="w-[52px] h-[28px] text-sm text-white bg-black border rounded-full hover:bg-gray-800 hover:scale-[1.1] active:scale-[0.9] transition-transform duration-150"
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default RegisteredCourseItem;
