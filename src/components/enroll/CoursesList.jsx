import CourseItem from "./CourseItem";
import { enrollCourse } from "@/services/enrollments";

const CoursesList = ({ courses, capacities, onEnrollSuccess }) => {
  const handleEnroll = async (courseId) => {
    try {
      const res = await enrollCourse(courseId);
      onEnrollSuccess?.();
    } catch (error) {
      const msg = error?.response?.data?.message || "신청 실패 또는 서버 오류";
      alert(msg);
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
            currentCapa={current?.current}
            onEnroll={handleEnroll}
          />
        );
      })}
    </div>
  );
};

export default CoursesList;
