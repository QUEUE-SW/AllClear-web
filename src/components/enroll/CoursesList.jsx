import CourseItem from "@/components/enroll/CourseItem";

const CoursesList = ({ courses, capacities, onEnrollSuccess }) => {
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
            onEnrollSuccess={onEnrollSuccess}
          />
        );
      })}
    </div>
  );
};

export default CoursesList;
