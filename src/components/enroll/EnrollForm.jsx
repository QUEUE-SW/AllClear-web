import React from "react";
import CourseCard from "./CourseCard";
import Filter from "./Filter";
import { getCourses, getEnrollStatus } from "@/services/courses";
import { useEffect } from "react";
import { useState } from "react";
const EnrollForm = () => {
  const [filters, setFilters] = useState({
    category: "",
    grade: "",
    department: "",
    code: "",
  });
  const [generalCourses, setGeneralCourses] = useState([]);
  const [registerCourses, setRegisterCourses] = useState([]);

  const getGeneralCourses = async () => {
    try {
      // 선택한 필터만 요청하기 위해 filters를 포맷팅
      const formatFilters = {};
      if (filters.category) {
        formatFilters.category = filters.category;
      }
      if (filters.grade) {
        formatFilters.grade = parseInt(filters.grade);
      }
      if (filters.department) {
        formatFilters.department = filters.department;
      }
      if (filters.code) {
        formatFilters.code = filters.code;
      }
      // 수강목록 조회 api 연동
      const res = await getCourses(formatFilters);
      setGeneralCourses(res);
    } catch (error) {
      console.error("수강 목록 조회 실패", error);
    }
  };

  const getRegisterCourses = async () => {
    try {
      const res = await getEnrollStatus();
      setRegisterCourses(res);
    } catch (error) {
      console.error("수강신청 현황 조회 실패", error);
    }
  };

  // 필터를 변경할 때마다 강의목록 조희 api를 연동합니다.
  useEffect(() => {
    getGeneralCourses();
  }, [filters]);

  useEffect(() => {
    getRegisterCourses();
  }, []);

  return (
    <div className="w-[1050px]">
      {/* filters */}
      <div className="flex gap-12 mb-5">
        <Filter kind="category" setFilter={setFilters} />
        <Filter kind="grade" setFilter={setFilters} />
        <Filter kind="department" setFilter={setFilters} />
        <Filter kind="code" setFilter={setFilters} />
      </div>
      <div className="flex gap-6 min-w-0">
        {/* cources */}
        <CourseCard
          title="강의 목록"
          courses={generalCourses}
          isRegister={false}
          onEnrollSuccess={getRegisterCourses}
        />
        {/* register */}
        <CourseCard
          title="수강 현황"
          courses={registerCourses}
          isRegister={true}
          onEnrollSuccess={getRegisterCourses}
        />
      </div>
    </div>
  );
};

export default EnrollForm;
