import React from "react";
import { useState } from "react";

const Filter = ({ filter }) => {
  let filterName = [];
  let options = [];
  switch (filter) {
    case "category":
      options = ["전체", "교양", "전공"];
      filterName = "이수구분";
      break;
    case "grade":
      options = ["전체", "1학년", "2학년", "3학년", "4학년"];
      filterName = "학년";
      break;
    case "department":
      options = [
        "전체",
        "컴퓨터학부",
        "국어국문학과",
        "오징어심리학과",
        "사과껍질깎기학과",
      ];
      filterName = "학과";
      break;
    case "code":
      // 직접 입력 및 입력한 내용 기준 필터링...
      options = ["전체", "교양", "전공"];
      filterName = "강의코드";
      break;
    default:
      break;
  }

  const handleChange = (option) => {
    console.log("선택한 옵션: ", option);
  };

  return (
    <div className="flex flex-col w-[225px]">
      <label>{filterName}</label>
      <select
        onChange={(e) => handleChange(e.target.value)}
        className="p-2 rounded-lg border-2 border-gray-300"
      >
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
