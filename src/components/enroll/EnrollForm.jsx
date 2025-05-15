import React from "react";
import CourseCard from "./CourseCard";
import Filter from "./Filter";

const EnrollForm = () => {
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
        <CourseCard title="강의 목록" courseNum={4} isRegister={false}/>
        {/* register */}
        <CourseCard title="수강 현황" courseNum={2} isRegister={true}/>
      </div>
    </div>
  );
};

export default EnrollForm;
