import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Filter = ({ kind, setFilter }) => {
  const [code, setCode] = useState("");
  let filterName = "";
  let options = [];
  switch (kind) {
    case "category":
      options = [
        { label: "전체", value: "" },
        { label: "교양", value: "GENERAL" },
        { label: "전공", value: "MAJOR" },
      ];
      filterName = "이수구분";
      break;
    case "grade":
      options = [
        { label: "전체", value: "" },
        { label: "1학년", value: 1 },
        { label: "2학년", value: 2 },
        { label: "3학년", value: 3 },
        { label: "4학년", value: 4 },
      ];
      filterName = "학년";
      break;
    case "department":
      options = [
        { label: "전체", value: "" },
        { label: "컴퓨터공학부", value: "COMPUTER_SCIENCE_AND_ENGINEERING" },
        { label: "전자전기공학부", value: "ELECTRONIC_ENGINEERING" },
        { label: "로봇공학과", value: "ROBOTICS_ENGINEERING" },
      ];
      filterName = "학과";
      break;
    case "code":
      filterName = "강의코드";
      break;
    default:
      break;
  }

  const handleChange = (option) => {
    setFilter((prev) => ({
      ...prev,
      [kind]: option,
    }));
  };

  useEffect(() => {
    handleChange(code);
  }, [code]);
  return (
    <div className="flex flex-col w-[225px]">
      <label>{filterName}</label>
      {kind !== "code" ? (
        <select
          onChange={(e) => handleChange(e.target.value)}
          className="p-2 rounded-lg border-2 border-gray-300"
        >
          {options.map((item, idx) => (
            <option key={idx} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="p-2 rounded-lg border-2 border-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      )}
    </div>
  );
};

export default Filter;
