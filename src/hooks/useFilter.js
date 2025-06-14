import { useEffect, useMemo, useState } from "react";

const departmentMajorMap = {
  "COMPUTER_SCIENCE_AND_ENGINEERING": [
    { label: "전체", value: "" },
    { label: "통합", value: "ALL" },
    { label: "컴퓨터공학전공", value: "CSE" },
    { label: "정보통신공학전공", value: "ICE" },
    { label: "소프트웨어융합전공", value: "SC" },
  ],
  "ELECTRONIC_ENGINEERING": [],
  "ROBOTICS_ENGINEERING": [],
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
    const majors = departmentMajorMap[department] || [];

    if (department !== "COMPUTER_SCIENCE_AND_ENGINEERING") return [];

    switch (grade) {
      case "1":
      case 1:
        return majors.filter((m) => m.value === "ALL");
      case "2":
      case "3":
      case 2:
      case 3:
        return majors.filter((m) => m.value !== "ALL");
      case "4":
      case 4:
        return majors.filter((m) => m.value === "CSE" || m.value === "ICE");
      default:
        return [];
    }
  };

  useEffect(() => {
    setMajor("");
  }, [grade, department]);

  const isMajorDisabled = department !== "COMPUTER_SCIENCE_AND_ENGINEERING" || grade === "";

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
    isMajorDisabled,
    filters,
    resetFilters,
  };
};
