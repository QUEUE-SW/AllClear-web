import Header from "@/components/home/auth/Header";
import LoginForm from "@/components/home/auth/LoginForm";
import { login } from "@/services/auth";
import { useAuthStore } from "@/stores/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * LoginPage.jsx
 *
 * 로그인 페이지의 로직을 담당하는 컨테이너 컴포넌트입니다.
 *
 * - 사용자로부터 로그인 정보(identifier, password)를 입력받음
 * - 로그인 API 호출을 통해 accessToken을 발급받음
 * - 발급된 토큰을 zustand 상태에 저장
 * - 로그인 성공 시 `/sugang` 페이지로 이동
 * - 로그인 실패 시 사용자에게 오류 메시지 표시
 *
 * - <LoginForm />: 사용자 입력을 처리하는 프레젠테이셔널 컴포넌트
 */
const LoginPage = () => {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async ({ identifier, password }) => {
    try {
      const res = await login(identifier, password);

      if (res.code === "2000") {
        setAccessToken(res.data.accessToken);
        navigate("/enroll");
      } else {
        setErrorMessage(res.message || "로그인에 실패했습니다.");
      }
    } catch (error) {
      const status = error?.response?.status;
      const code = error?.response?.data?.code;

      if (status === 400 && code === "4000") {
        // 학번, 비밀번호 형식 오류
        setErrorMessage("학번과 비밀번호를 모두 입력해주세요.");
      } else if (status === 401 && code === "4010") {
        // 비밀번호 미일치
        setErrorMessage("비밀번호가 올바르지 않습니다. 다시 입력해주세요.");
      } else if (status === 404 && code === "4040") {
        // 해당 학번 미존재
        setErrorMessage("입력하신 학번으로 가입된 계정을 찾을 수 없습니다.");
      } else {
        setErrorMessage("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <div className="w-full h-screen px-4 ">
      <Header/>
      <div className="text-center py-14">
        <div className="text-3xl font-extrabold">AllClear 수강신청 시스템</div>
        <div className="text-gray-500">Course Registration System</div>
      </div>
      <div className=" flex justify-center items-center ">
        <LoginForm onLoginSubmit={handleLogin} errorMessage={errorMessage} />
        <div>dddd</div>
      </div>
    </div>
  );
};

export default LoginPage;
