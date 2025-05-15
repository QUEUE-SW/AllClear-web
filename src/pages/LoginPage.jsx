import LoginForm from "@/components/home/auth/LoginForm";
import { useAuthStore } from "@/store/authStore";
import { apiInterface } from "@/utils/apiInterface";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	const setAccessToken = useAuthStore((state) => state.setAccessToken);

	const handleLogin = async ({ identifier, password }) => {
		console.log(identifier, password);
		try {
			const res = await apiInterface(
				"post",
				"/auth/sign-in",
				{ identifier, password },
				{},
				false
			);
			setAccessToken(res.data.accessToken);
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
