import React from "react";
import CourseCard from "./CourseCard";
import Filter from "./Filter";

const EnrollForm = () => {
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
      status: "red",
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
      status: "green",
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
      status: "orange",
    },
    {
      courseId: 4,
      courseCode: "cs103",
      name: "컴퓨터프로그래밍",
      professor: "박대영",
      location: "IT관 117",
      capacity: "20",
      credit: 3,
      time1: "월 10:00~11:30",
      time2: "수 12:00~13:30",
      status: "gray",
    },
  ];
  const mockRegister = [
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
  ];
  return (
    <div className="w-[1050px]">
      {/* filters */}
      <div className="flex gap-12 mb-5">
        <Filter filter="category"/>
        <Filter filter="grade"/>
        <Filter filter="department"/>
        <Filter filter="code"/>
      </div>
      <div className="flex gap-6">
        {/* cources */}
        <CourseCard title="강의 목록" course={mockCourse} isRegister={false}/>
        {/* register */}
        <CourseCard title="수강 현황" course={mockRegister} isRegister={true}/>
      </div>
    </div>
  );
};

export default EnrollForm;
