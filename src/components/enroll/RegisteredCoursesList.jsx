import { BookOpen } from "lucide-react"; // 상단 아이콘 예시
import RegisteredCourseItem from "@/components/enroll/RegisteredCourseItem";

const RegisteredCoursesList = ({ courses, onCancelSuccess }) => {
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
        {courses?.map((course) => {
          return (
            <RegisteredCourseItem
              key={course.courseId}
              course={course}
              onCancelSuccess={onCancelSuccess}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RegisteredCoursesList;
