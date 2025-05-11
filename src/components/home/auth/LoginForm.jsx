import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const inputStyle =
    "w-full px-4 py-2 lg:py-3 bg-gray-200 2xl:text-lg lg:text-sm text-gray-500 border border-gray-300 rounded-3xl";
  const lineStyle = "grow border-t border-gray-300";

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    stdId: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!["stdId", "password"].includes(name)) return;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    e.preventDefault(); //폼 제출 시 리로딩 방지
    console.log(formData);
    alert("로그인 버튼이 클릭되었습니다.");
  };
  const toSignup = () => navigate("/signup");

  return (
    // 중앙정렬
    <div className="flex justify-center items-center h-screen">
      {/* 로그인 컨테이너 */}
      <div className="w-[300px] lg:w-[430px] 2xl:w-[630px] h-[370px] 2xl:h-[550px] p-8 2xl:p-10 bg-gray-100 border rounded-[45px] shadow-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.25),inset_1px_1px_10px_rgba(0,0,0,5)] ">
        <div className="mb-6 2xl:mb-10 text-xl 2xl:text-3xl">
          영남대학교 수강신청
        </div>
        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-2 2xl:space-y-3">
          <input
            type="text"
            name="stdId"
            value={formData.stdId}
            onChange={handleChange}
            className={inputStyle}
            placeholder="학번"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={inputStyle}
            placeholder="비밀번호"
          />
        </form>
        <button
          type="submit"
          className="cursor-pointer w-full p-2 2xl:p-4 my-5 2xl:my-8 bg-indigo-500 text-white text-center rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-600/70 hover:shadow-[inset_10px_10px_10px]"
        >
          로그인
        </button>
        <div className="flex items-center mx-5 text-gray-400 lg:text-sm 2xl:text-md">
          <hr className={lineStyle} />
          <span className="mx-5 2xl:my-3">또는</span>
          <hr className={lineStyle} />
        </div>
        <div
          className="cursor-pointer p-2 2xl:p-4 my-5 2xl:my-8 bg-white text-center rounded-lg shadow-gray-300/50 hover:shadow-indigo-300/50 shadow-[inset_3px_3px_3px_rgba(0,0,0,5)] hover:shadow-[10px_10px_10px,inset_1px_1px_5px]"
          onClick={toSignup}
        >
          회원가입
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
