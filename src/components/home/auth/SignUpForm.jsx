import { useState } from "react";
import {
  gradeOptions,
  collegeOptions,
  departmentOptions,
  majorOptions,
} from "@/data/signUpOptions";

const SignUpForm = ({ onSubmit }) => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [major, setMajor] = useState("");

  // 패스워드 에러
  const [passwordError, setPasswordError] = useState(false);

  // 패스워드 입력 감지 및 일치 검사
  const handlePWChange = (value) => {
    setPassword(value);
    if (passwordConfirm && value !== passwordConfirm) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };
  const handlePWConfirmChange = (value) => {
    setPasswordConfirm(value);
    if (password && password !== value) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // 서브밋 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setPasswordError(true);
      return;
    }

    onSubmit?.({
      identifier: studentId,
      password,
      passwordConfirm,
      name,
      grade,
      college,
      department,
      major,
    });
  };

  // 공통 인풋 스타일. 추후 파일 분리 예정
  const inputStyle =
    "w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-600 placeholder-gray-400 text-sm";

  return (
    <div className="w-[450px] h-[590px] bg-white rounded-3xl shadow-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.25),inset_1px_1px_10px_rgba(0,0,0,5)] p-4">
      <h1 className="text-lg font-semibold mb-4">수강신청 회원가입</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="학번"
          className={inputStyle}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => handlePWChange(e.target.value)}
          placeholder="비밀번호"
          className={inputStyle}
        />

        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => handlePWConfirmChange(e.target.value)}
          placeholder="비밀번호 확인"
          className={inputStyle}
        />

        <span className="min-h-[18px] -mt-1 ml-2 text-xs text-red-500">
          {passwordError && "비밀번호가 일치하지 않습니다."}
        </span>

        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            className={inputStyle}
          />

          <select
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            className={inputStyle}
          >
            <option value="">학년</option>
            {gradeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <select
          value={college}
          onChange={(e) => setCollege(e.target.value)}
          className={inputStyle}
        >
          {collegeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className={inputStyle}
        >
          {departmentOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          className={inputStyle}
        >
          {majorOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full mt-4 py-2.5 bg-indigo-500 text-white rounded-xl shadow-gray-300/50 hover:shadow-indigo-300/50 shadow-[inset_3px_3px_3px_rgba(0,0,0,5)] hover:shadow-[10px_10px_10px,inset_1px_1px_5px]"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
