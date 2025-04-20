// ./src/pages/HomePage.jsx
// import Home from "components/home/Home";

import Home from "@/components/home/Home";

export async function HomeLoader() {
	// 필요할 경우 추가
	// HomePage에서 사용되는 정보를 HomePage Component가 로딩 되기 전에 받아옵니다.
}

export async function HomeAction() {
	// 필요할 경우 추가
	// HomePage에서 서버로 전송한 form 양식들의 정보를 이 곳에서 관리하고, 서버로 전송합니다.
}

const HomePage = () => {
	return <Home />;
};

export default HomePage;
