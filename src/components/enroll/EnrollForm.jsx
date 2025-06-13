import React, { useEffect, useState } from "react";
import { getCapacities, getCourses, getEnrollStatus } from "@/services/courses";
import FilterBar from "@/components/enroll/FilterBar";
import CoursesList from "./CoursesList";
import RegisteredCoursesList from "./RegisteredCoursesList";
import CreditsStatus from "./CreditsStatus";
import { getCredits } from "@/services/student";

const EnrollForm = () => {
  // 각각의 필터 상태 분리
  const [category, setCategory] = useState("");
  const [grade, setGrade] = useState("");
  const [department, setDepartment] = useState("");
  const [major, setMajor] = useState("");

  const [generalCourses, setGeneralCourses] = useState([]);
  const [registerCourses, setRegisterCourses] = useState([]);
  const [capacities, setCapacities] = useState([]);

  const [credits, setCredits] = useState({
    totalCredit: null,
    maxCredit: null,
    remainingCredit: null,
  });

  // 강의 목록 조회
  const getGeneralCourses = async () => {
    try {
      const filters = {
        category,
        grade,
        department,
        major,
        code: "",
      };

      const courseRes = await getCourses(filters);
      setGeneralCourses(courseRes);

      const ids = courseRes.map((c) => c.courseId);
      const capaRes = await getCapacities(ids);
      setCapacities(capaRes);
    } catch (error) {
      console.error("수강 목록 조회 실패", error);
    }
  };

  // 수강 신청 현황 조회
  const getRegisterCourses = async () => {
    try {
      const res = await getEnrollStatus();
      setRegisterCourses(res);
    } catch (error) {
      console.error("수강신청 현황 조회 실패", error);
    }
  };

  const getCreditData = async () => {
    try {
      const res = await getCredits();
      setCredits(res);
    } catch (error) {
      console.error("학점 조회 실패", error);
    }
  };

  const handleAfterEnroll = () => {
    getGeneralCourses();
    getRegisterCourses();
    getCreditData();
  };

  // 필터 변경될 때마다 호출 (최초 포함)
  useEffect(() => {
    getGeneralCourses();
    getCreditData();
  }, [category, grade, department, major]);

  useEffect(() => {
    getRegisterCourses();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="w-[1230px] flex gap-[22px]">
        <div className="flex flex-col gap-[15px]">
          <FilterBar
            category={category}
            grade={grade}
            department={department}
            major={major}
            setCategory={setCategory}
            setGrade={setGrade}
            setDepartment={setDepartment}
            setMajor={setMajor}
          />
          <CoursesList
            courses={generalCourses}
            capacities={capacities}
            onEnrollSuccess={handleAfterEnroll}
          />
        </div>
        <RegisteredCoursesList
          courses={registerCourses}
          onEnrollSuccess={getRegisterCourses}
        />
      </div>
      <CreditsStatus credits={credits} />
    </div>
  );
};

export default EnrollForm;
