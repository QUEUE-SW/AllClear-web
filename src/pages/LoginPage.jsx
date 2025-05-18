import LoginForm from "@/components/home/auth/LoginForm";
import { login } from "@/services/auth";
import { useAuthStore } from "@/stores/authStore";
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

  const handleLogin = async ({ identifier, password }) => {
    try {
      const { accessToken } = await login(identifier, password);
      setAccessToken(accessToken);
      navigate("/enroll");
    } catch (error) {
      alert("로그인중 오류 발생");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50 px-4">
      <LoginForm onLoginSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
