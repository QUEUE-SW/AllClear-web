import React from "react";
import { useState } from "react";

const Filter = ({ kind, setFilter }) => {
  const [code, setCode] = useState("");

  let filterName = "";
  let options = [];
  // 필터 종류별로 label(사용자에게 보이는 이름)과 value(서버에 전달할 값) 설정
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

  // 선택한 필터에 맞게 서버에 전송할 filter 객체 설정
  // 이미 선택한 필터가 초기화되지 않기 위해 prev 사용
  const handleChange = (option) => {
    setFilter((prev) => ({
      ...prev,
      [kind]: option,
    }));
  };

  return (
    <div className="flex flex-col w-[225px]">
      <label>{filterName}</label>
      {/* 강의코드 필터인 경우엔 input 태그를 사용 */}
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
          // 사용자의 입력을 바로 인식하여 필터링 적용하기 위해 인라인으로 핸들러 작성
          value={code}
          onChange={(e) => {
            const value = e.target.value;
            setCode(value);
            setFilter((prev) => ({
              ...prev,
              [kind]: value,
            }));
          }}
          className="p-2 rounded-lg border-2 border-gray-300"
          placeholder="강의코드 입력"
        />
      )}
    </div>
  );
};

export default Filter;
