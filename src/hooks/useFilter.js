import { useEffect, useMemo, useState } from "react";

const departmentMajorMap = {
  "COMPUTER_SCIENCE_AND_ENGINEERING": [
    { label: "전체", value: "" },
    { label: "통합", value: "ALL" },
    { label: "컴퓨터공학전공", value: "CSE" },
    { label: "정보통신공학전공", value: "ICE" },
    { label: "소프트웨어융합전공", value: "SC" },
  ],
  "ELECTRONIC_ENGINEERING": [{ label: "전체", value: "" },],
  "ROBOTICS_ENGINEERING": [{ label: "전체", value: "" },],
};

export const useFilter = () => {
  const [category, setCategory] = useState("");
  const [grade, setGrade] = useState("");
  const [department, setDepartment] = useState("");
  const [major, setMajor] = useState("");

  const filters = useMemo(() => {
    return { category, grade, department, major, code: "" };
  }, [category, grade, department, major]);

  const resetFilters = () => {
    setCategory("");
    setGrade("");
    setDepartment("");
    setMajor("");
  };

  const getFilteredMajorOptions = () => {
    return departmentMajorMap[department] || [{ label: "전체", value: "" },];
  };

  const getFilteredGradeOptions = () => {
    const allGrades = [
      { label: "전체", value: "" },
      { label: "1학년", value: 1 },
      { label: "2학년", value: 2 },
      { label: "3학년", value: 3 },
      { label: "4학년", value: 4 },
    ];

    // 아무것도 선택되지 않은 경우
    if (!department) {
      return allGrades;
    }

    // 전공이 선택되지 않은 경우 → 가능한 모든 학년 (단, 전체는 제외)
    if (!major) {
      return allGrades;
    }

    // 전공이 "ALL"이면 1학년만
    if (major === "ALL") {
      return [{ label: "전체", value: "" }, { label: "1학년", value: 1 }];
    }

    // 전공이 "SC"면 2,3학년만
    if (major === "SC") {
      return [
        { label: "전체", value: "" },
        { label: "2학년", value: 2 },
        { label: "3학년", value: 3 },
      ];
    }

    // 전공이 "CSE" 또는 "ICE"면 2,3,4학년
    if (major === "CSE" || major === "ICE") {
      return [
        { label: "전체", value: "" },
        { label: "2학년", value: 2 },
        { label: "3학년", value: 3 },
        { label: "4학년", value: 4 },
      ];
    }

    // fallback
    return allGrades;
  };


  useEffect(() => {
    const majors = departmentMajorMap[department] || [];
    const validMajorValues = majors.map((m) => m.value);

    if (!department && !major) return;

    // 전공 자체가 현재 학과에서 존재하지 않으면 무조건 초기화
    if (!validMajorValues.includes(major)) {
      setMajor("");
      setGrade(""); // 연쇄 초기화
      return;
    }

    // 전공이 유효하면, 그에 맞는 학년만 허용
    const validGradesByMajor = (() => {
      if (major === "ALL") return [1, "1"];
      if (["CSE", "ICE"].includes(major)) return [2, 3, 4, "2", "3", "4"];
      if (major === "SC") return [2, 3, "2", "3"];
      return [1, 2, 3, 4, "1", "2", "3", "4"];
    })();

    if (!validGradesByMajor.includes(grade)) {
      setGrade(""); // 전공이 우선이므로, 학년만 초기화
    }
  }, [department, major, grade]);




  return {
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
  };
};
