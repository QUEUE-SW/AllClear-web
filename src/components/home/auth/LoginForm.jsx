import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ onLoginSubmit, errorMessage }) {
  const inputStyle =
    "w-full px-4 py-3 bg-gray-50 2xl:text-lg lg:text-sm text-gray-500 border border-gray-300 rounded-[8px]";

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!["identifier", "password"].includes(name)) return;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //폼 제출 시 리로딩 방지
    onLoginSubmit(formData);
  };
  const toSignup = () => navigate("/signup");

  return (
    // 중앙정렬
    <div className="flex justify-center items-center">
      {/* 로그인 컨테이너 */}
      <div className="w-[446px] h-[470px] px-8 py-6 border rounded-[8px] shadow-gray-300 shadow-[0px_6px_8px_rgba(0,0,0,0.25)] ">
        <div className="mb-6 text-center">
          <div className="text-xl font-bold">로그인</div>
          <div className="text-sm text-gray-600">
            학번과 비밀번호를 입력하세요.
          </div>
        </div>
        {/* 폼 */}
        <form onSubmit={handleSubmit} className="text-sm">
          <div className="space-y-3">
            <div>학번 (Student ID)</div>
            <input
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
              className={inputStyle}
              placeholder="학번을 입력하세요"
            />
            <div>비밀번호 (Password)</div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={inputStyle}
              placeholder="비밀번호를 입력하세요"
            />
          </div>

          {(
            <div className="w-full text-center text-sm text-red-500 mt-2 min-h-[20px]" disabled={errorMessage}>
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="cursor-pointer w-full h-[44px] mt-3 mb-2 bg-indigo-700 text-white text-center rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
            onClick={handleSubmit}
          >
            로그인
          </button>
        </form>
        <div className="mt-8 text-center">
          <div className="cursor-pointer text-indigo-700" onClick={toSignup}>
            회원가입
          </div>
          <div className="m-1 text-xs text-gray-400">
            문의: 한이음 드림업 팀 큐 02-1234-5678
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
