import LoginForm from "@/components/home/auth/LoginForm";
import { login } from "@/services/auth";
import { useAuthStore } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	const setAccessToken = useAuthStore((state) => state.setAccessToken);

	const handleLogin = async ({ identifier, password }) => {
		try {
			const { accessToken } = await login(identifier, password);
			setAccessToken(accessToken);
			navigate("/sugang");
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
