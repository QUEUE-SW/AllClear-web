import { useState } from "react";
import {
  gradeMap,
  collegeMap,
  departmentMap,
  majorMap,
} from "@/constants/signupOptioins";

const SignUpForm = ({ onSubmit, errorMessage }) => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [major, setMajor] = useState("");

  const [studentIdError, setStudentIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState({
    studentId: "",
    password: "",
    passwordConfirm: "",
    common: "",
  });

  const gradeOptions = Object.keys(gradeMap);
  const collegeOptions = Object.keys(collegeMap);

  const departmentOptionsByCollege = {
    공과대학: [],
    디지털융합대학: ["컴퓨터공학부", "전자공학과", "로봇공학과"],
  };

  const majorOptionsByDepartment = {
    컴퓨터공학부: ["컴퓨터공학과", "정보통신공학과", "소프트웨어융합전공"],
    전자공학과: [],
    로봇공학과: [],
  };

  const getFilteredMajors = () => {
    if (!grade || !department) return [];

    const majors = majorOptionsByDepartment[department] || [];

    const isDigitalCS =
      college === "디지털융합대학" && department === "컴퓨터공학부";
    const gradeNum = gradeMap[grade];

    if (!isDigitalCS) return majors; // 전공 필터링 안 하는 경우 (그냥 학부 기준으로 보여줌)

    if (gradeNum === 1) return ["통합"];
    if (gradeNum === 2 || gradeNum === 3)
      return majors.filter((m) =>
        ["컴퓨터공학과", "정보통신공학과", "소프트웨어융합전공"].includes(m)
      );
    if (gradeNum === 4)
      return majors.filter((m) =>
        ["컴퓨터공학과", "정보통신공학과"].includes(m)
      );

    return majors;
  };

  // 패스워드 입력 감지 및 일치 검사
  const handlePWChange = (value) => {
    setPassword(value);
    if (passwordConfirm && value !== passwordConfirm) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError(null);
    }
  };
  const handlePWConfirmChange = (value) => {
    setPasswordConfirm(value);
    if (password && password !== value) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // 학번 (개별 처리)
    if (!studentId) {
      newErrors.studentId = "학번을 입력하세요.";
      setStudentIdError(newErrors.studentId);
    } else if (!/^[0-9]{8}$/.test(studentId)) {
      newErrors.studentId = "학번은 8자리 숫자여야 합니다.";
      setStudentIdError(newErrors.studentId);
    } else {
      setStudentIdError("");
    }

    if (!password) {
      newErrors.password = "비밀번호를 입력하세요.";
      setPasswordError(newErrors.password);
    }
    if (!passwordConfirm) {
      newErrors.passwordConfirm = "비밀번호 확인을 입력하세요.";
      setPasswordError(newErrors.passwordConfirm);
    }

    // 공통 항목 중 첫 번째 오류만 반영
    const majors = getFilteredMajors();

    if (!name) {
      newErrors.common = "이름을 입력하세요.";
    } else if (!/^[가-힣]{2,18}$/.test(name)) {
      newErrors.common = "이름은 한글 2~18자여야 합니다.";
    } else if (!grade) {
      newErrors.common = "학년을 선택하세요.";
    } else if (!college) {
      newErrors.common = "대학을 선택하세요.";
    } else if (!department) {
      newErrors.common = "학부/학과를 선택하세요.";
    } else if (majors.length > 0 && !major) {
      newErrors.common = "전공을 선택하세요.";
    }

    setFormError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 서브밋 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    onSubmit?.({
      identifier: studentId,
      password,
      passwordConfirm,
      name,
      grade: gradeMap[grade],
      college: collegeMap[college],
      department: departmentMap[department],
      major: majorMap[major],
    });
  };

  // 공통 인풋 스타일. 추후 파일 분리 예정
  const inputStyle =
    "w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl text-gray-600 placeholder-gray-400 text-sm";

  return (
    <div className="w-[450px] min-w-[400px] h-[590px] bg-white rounded-3xl shadow-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.25),inset_1px_1px_10px_rgba(0,0,0,5)] p-4">
      <h1 className="text-lg font-semibold mb-4">수강신청 회원가입</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          placeholder="학번"
          className={inputStyle}
        />
        <span className="min-h-[18px] -mt-3 -mb-2 ml-2 text-xs text-red-500">
          {studentIdError || errorMessage}
        </span>

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

        <span className="min-h-[18px] -mt-3 -mb-2 ml-2 text-xs text-red-500">
          {passwordError}
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
            onChange={(e) => {
              setGrade(e.target.value);
              setMajor("");
            }}
            className={inputStyle}
          >
            <option value="">학년</option>
            {gradeOptions.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <select
          value={college}
          onChange={(e) => {
            setCollege(e.target.value);
            setDepartment("");
            setMajor("");
          }}
          className={inputStyle}
        >
          <option value="">대학</option>
          {collegeOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select
          value={department}
          onChange={(e) => {
            setDepartment(e.target.value);
            setMajor("");
          }}
          className={inputStyle}
          disabled={!departmentOptionsByCollege[college]?.length}
        >
          <option value="">학부/학과</option>
          {departmentOptionsByCollege[college]?.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          className={inputStyle}
          disabled={getFilteredMajors().length === 0}
        >
          <option value="">전공</option>
          {getFilteredMajors().map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <span className="min-h-[18px] -mt-3 ml-2 text-xs text-red-500">
          {formError.common}
        </span>
        <button
          type="submit"
          className="w-full py-2.5 bg-indigo-500 text-white rounded-xl shadow-gray-300/50 hover:shadow-indigo-300/50 shadow-[inset_3px_3px_3px_rgba(0,0,0,5)] hover:shadow-[10px_10px_10px,inset_1px_1px_5px]"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;

/**
 * 대학
  공과대학: "ENGINEERING", -> 하위 학부 없음
  디지털융합대학: "DIGITAL_CONVERGENCE", -> 컴공, 전자, 로봇

  학부/학과
    컴퓨터공학부: "COMPUTER_SCIENCE_AND_ENGINEERING", -> 컴공, 정통, 소융
    전자공학과: "ELECTRONIC_ENGINEERING", -> 하위 전공 없음
    로봇공학과: "ROBOTICS_ENGINEERING", -> 하위 전공 없음

  디지털융합대학, 컴퓨터공학과 선택시에만 적용! 그 외 모든경우는 disabled처리
  1학년 선택시 -> 통합 전공만 표시

  2,3 학년 선택시 -> 컴공, 정통, 소융 전공만 표시

  4 학년 선택시 -> 컴공, 정통 전공만 표시
 */
