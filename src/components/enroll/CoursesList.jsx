import { toast } from "react-toastify";
import CourseItem from "./CourseItem";
import { enrollCourse } from "@/services/enrollments";

const CoursesList = ({ courses, capacities, onEnrollSuccess }) => {
  const handleEnroll = async (courseId) => {
    try {
      const res = await enrollCourse(courseId);
      const courseName = res.data.courseName;

      toast.success(`✅ ‘${courseName}’가 \n 성공적으로 신청되었습니다!`);

      onEnrollSuccess?.();
    } catch (error) {
      const status = error?.response?.status;
      const code = error?.response?.data?.code;
      const message = error?.response?.data?.message;

      if (status === 404 && code === "4040") {
        toast.error(message, { icon: false });
      } else if (status === 409 && code === "4090") {
        toast.error(message, { icon: false });
      } else if (status === 409 && code === "4091") {
        toast.error(message, { icon: false });
      } else {
        toast.error("수강 취소 실패: 서버 오류");
      }
    }
  };

  return (
    <div
      className="w-[814px] h-[607px] grid grid-cols-3 gap-2 overflow-y-auto
      [&::-webkit-scrollbar]:w-1
      [&::-webkit-scrollbar-track]:bg-transparent
      [&::-webkit-scrollbar-thumb]:bg-gray-400
      [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      {courses?.map((course) => {
        const current = capacities.find((c) => c.courseId === course.courseId);
        return (
          <CourseItem
            key={course.courseId}
            course={course}
            currentCapa={current?.participant}
            onEnroll={handleEnroll}
          />
        );
      })}
    </div>
  );
};

export default CoursesList;
