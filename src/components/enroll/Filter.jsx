import React, { useState } from "react";
import {
  categoryOptions,
  gradeOptions,
  departmentOptions,
  majorOptions,
} from "@/constants/filterOptions";
import { Search } from "lucide-react";

const Filter = ({ kind, setFilter }) => {
  const [code, setCode] = useState("");
  const [selected, setSelected] = useState(""); // select 전용 상태 추가

  let filterName = "";
  let options = [];
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

  const handleChange = (option) => {
    setSelected(option);
    setFilter((prev) => ({
      ...prev,
      [kind]: option,
    }));
  };

  return (
    <div className="flex flex-col flex-1">
      {kind !== "code" ? (
        <select
          value={selected}
          onChange={(e) => handleChange(e.target.value)}
          className="p-2"
        >
          <option value="" disabled hidden>
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
