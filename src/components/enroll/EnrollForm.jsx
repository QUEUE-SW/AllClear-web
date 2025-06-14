import { useEffect, useState } from "react";
import { getCapacities, getCourses, getEnrollStatus } from "@/services/courses";
import FilterBar from "@/components/enroll/FilterBar";
import CoursesList from "@/components/enroll/CoursesList";
import RegisteredCoursesList from "@/components/enroll/RegisteredCoursesList";
import CreditsStatus from "@/components/enroll/CreditsStatus";
import { getCredits } from "@/services/student";
import { useFilter } from "@/hooks/useFilter";

const EnrollForm = () => {
  const {
    category,
    grade,
    department,
    major,
    setCategory,
    setGrade,
    setDepartment,
    setMajor,
    getFilteredMajorOptions,
    getFilteredGradeOptions,
    filters,
    resetFilters,
  } = useFilter();

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
      const courseRes = await getCourses(filters);
      setGeneralCourses(courseRes.data);

      const ids = courseRes.data.map((c) => c.courseId);
      const capaRes = await getCapacities(ids);
      setCapacities(capaRes.data);
    } catch (error) {
      console.error("수강 목록 조회 실패", error);
    }
  };

  // 수강 신청 현황 조회
  const getRegisterCourses = async () => {
    try {
      const res = await getEnrollStatus();
      setRegisterCourses(res.data);
    } catch (error) {
      console.error("수강신청 현황 조회 실패", error);
    }
  };

  const getCreditData = async () => {
    try {
      const res = await getCredits();
      setCredits(res.data);
    } catch (error) {
      console.error("학점 조회 실패", error);
    }
  };

  const handleAfterAction = () => {
    getGeneralCourses();
    getRegisterCourses();
    getCreditData();
  };

  // 필터 변경될 때마다 호출 (최초 포함)
  useEffect(() => {
    getGeneralCourses();
  }, [filters]);

  useEffect(() => {
    getRegisterCourses();
  }, []);

  useEffect(() => {
    getCreditData(); // ✅ 최초 1회만 실행
  }, []);

  const filteredCourses = generalCourses.filter(
    (course) =>
      !registerCourses.some((enrolled) => enrolled.courseId === course.courseId)
  );

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
            getFilteredMajorOptions={getFilteredMajorOptions}
            getFilteredGradeOptions={getFilteredGradeOptions}
            // isMajorDisabled={isMajorDisabled}
          />
          <CoursesList
            courses={filteredCourses}
            capacities={capacities}
            onEnrollSuccess={handleAfterAction}
          />
        </div>
        <RegisteredCoursesList
          courses={registerCourses}
          onEnrollSuccess={getRegisterCourses}
          onCancelSuccess={handleAfterAction}
        />
      </div>
      <CreditsStatus credits={credits} />
    </div>
  );
};

export default EnrollForm;
