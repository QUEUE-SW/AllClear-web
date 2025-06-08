import React from "react";
import { useState } from "react";
import {
  categoryOptions,
  gradeOptions,
  departmentOptions,
  majorOptions,
} from "@/constants/filterOptions";
import { Search } from "lucide-react";

const Filter = ({ kind, setFilter }) => {
  const [code, setCode] = useState("");

  let filterName = "";
  let options = [];
  // 필터 종류별로 label(사용자에게 보이는 이름)과 value(서버에 전달할 값) 설정
  switch (kind) {
    case "department":
      options = departmentOptions;
      filterName = "학과";
      break;
    case "major":
      options = majorOptions;
      filterName = "전공";
      break;
    case "category":
      options = categoryOptions;
      filterName = "이수구분";
      break;
    case "grade":
      options = gradeOptions;
      filterName = "학년";
      break;
    case "code":
      filterName = "강의코드";
      break;
    default:
      break;
  }

  // 선택한 필터에 맞게 서버에 전송할 filter 객체 설정
  // 이미 선택한 필터가 초기화되지 않기 위해 prev 사용
  const handleChange = (option) => {
    setFilter((prev) => ({
      ...prev,
      [kind]: option,
    }));
  };

  return (
    <div className="flex flex-col flex-1">
      {/* 강의코드 필터인 경우엔 input 태그를 사용 */}
      {kind !== "code" ? (
        <select onChange={(e) => handleChange(e.target.value)} className="p-2">
          <option value="" disabled selected hidden>
            {filterName}
          </option>
          {options.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="flex items-center gap-2 px-4 py-2 bg-white">
          <Search size={16} className="text-gray-500" />
          <input
            type="number"
            min="0"
            value={code}
            onChange={(e) => {
              const value = e.target.value;
              setCode(value);
              setFilter((prev) => ({
                ...prev,
                [kind]: value,
              }));
            }}
            className="w-full bg-transparent outline-none text-sm 
      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            placeholder="강의코드 검색"
          />
        </div>
      )}
    </div>
  );
};

export default Filter;
