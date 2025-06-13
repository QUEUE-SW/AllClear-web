import React, { useEffect, useState } from "react";
import { getCourses, getEnrollStatus } from "@/services/courses";
import FilterBar from "@/components/enroll/FilterBar";
import CoursesList from "./CoursesList";
import RegisteredCoursesList from "./RegisteredCoursesList";
import CreditsStatus from "./CreditsStatus";

const EnrollForm = () => {
  const [filters, setFilters] = useState({
    category: "",
    grade: "",
    department: "",
    major: "",
    code: "",
  });

  const [generalCourses, setGeneralCourses] = useState([]);
  const [registerCourses, setRegisterCourses] = useState([]);

  const getGeneralCourses = async () => {
    try {
      const formatFilters = {};
      if (filters.category) formatFilters.category = filters.category;
      if (filters.grade) formatFilters.grade = parseInt(filters.grade);
      if (filters.department) formatFilters.department = filters.department;
      if (filters.major) formatFilters.major = filters.major;
      if (filters.code) formatFilters.code = filters.code;

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

  useEffect(() => {
    getGeneralCourses();
  }, [filters]);

  useEffect(() => {
    getRegisterCourses();
  }, []);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="w-[1230px] flex gap-[22px]">
        <div className="flex flex-col gap-[15px]">
          <FilterBar filters={filters} onChange={handleFilterChange} />
          <CoursesList
            courses={generalCourses}
            onEnrollSuccess={getRegisterCourses}
          />
        </div>
        <RegisteredCoursesList
          courses={registerCourses}
          onEnrollSuccess={getRegisterCourses}
        />
      </div>
      <CreditsStatus />
    </div>
  );
};

export default EnrollForm;
