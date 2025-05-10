// ./src/components/home/Home.jsx

import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const toLogin = () => {
		navigate("/login");
	}
  return (
    <div>
      <div className="bg-yellow-200 text-3xl text-red-500 p-4">Home</div>
			<button className="p-4 border hover:bg-slate-500" onClick={toLogin}>Login</button>
    </div>
  );
};

export default Home;
