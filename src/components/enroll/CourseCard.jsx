import React from "react";

const CourseCard = ({ title, courseNum, isRegister }) => {
  const mockCourse = [
    {
      courseId: 1,
      courseCode: "cs101",
      name: "운영체제",
      professor: "박대영",
      location: "IT관 117",
      capacity: "20/20",
      credit: 3,
      time1: "월 10:00~11:30",
      time2: "수 12:00~13:30",
    },
    {
      courseId: 2,
      courseCode: "cs102",
      name: "컴퓨터프로그래밍",
      professor: "박대영",
      location: "IT관 117",
      capacity: "20",
      credit: 3,
      time1: "월 10:00~11:30",
      time2: "수 12:00~13:30",
    },
    {
      courseId: 3,
      courseCode: "cs103",
      name: "컴퓨터프로그래밍",
      professor: "박대영",
      location: "IT관 117",
      capacity: "20",
      credit: 3,
      time1: "월 10:00~11:30",
      time2: "수 12:00~13:30",
    },
  ];

  return (
    <div className="border w-[515px] bg-slate-100 rounded-xl">
      <div className="flex justify-between border-b border-slate-400 p-4">
        <div className="text-xl">{title}</div>
        <div>{courseNum}개 강의</div>
      </div>
      <div className="flex border-slate-400 border-b text-sm p-2 text-center">
        <div className="w-[55px]">강의 번호</div>
        <div className="w-[60px]">강의명</div>
        <div className="w-[70px]">교수명</div>
        <div className="w-[85px]">시간</div>
        <div className="w-[70px]">여석현황</div>
        <div className="w-[65px]">강의실</div>
        <div className="w-[30px]">학점</div>
        <div className="w-[60px]">버튼임당</div>
      </div>
      <div className="w-full h-[630px]">
        {mockCourse.map((course) => (
          <div key={course.courseId} className="flex p-2 h-20 text-sm items-center text-center bg-white border-gray-300 border-b">
            <div className="w-[55px]">{course.courseCode}</div>
            <div className="w-[60px]">{course.name}</div>
            <div className="w-[70px]">{course.professor}</div>
            <div className="w-[85px] text-xs">
              {course.time1}
              <br />
              {course.time2}
            </div>
            <div className="w-[70px]">{course.capacity}</div>
            <div className="w-[65px]">{course.location}</div>
            <div className="w-[30px]">{course.credit}</div>
            {!isRegister ? 
            <button className="w-[60px]">신청</button>
            :
            <button className="w-[60px]">취소</button>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
