import CourseItem from "@/components/enroll/CourseItem";

const CoursesList = ({ courses, capacities, onEnrollSuccess }) => {
  return (
    <div
      className="w-[814px] h-[607px] overflow-y-auto
  [&::-webkit-scrollbar]:w-1
  [&::-webkit-scrollbar-track]:bg-transparent
  [&::-webkit-scrollbar-thumb]:bg-gray-400
  [&::-webkit-scrollbar-thumb]:rounded-full"
    >
      <div className="grid grid-cols-3 gap-x-2 gap-y-3">
        {courses?.map((course) => {
          const current = capacities.find(
            (c) => c.courseId === course.courseId
          );
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
    </div>
  );
};

export default CoursesList;
