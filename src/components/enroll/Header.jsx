import { useAuthStore } from "@/stores/authStore";
import { useNavigate } from "react-router-dom";
import { Calendar, User, LogOut } from "lucide-react";
import { logout } from "@/services/auth";
import { useEffect, useState } from "react";

const Header = ({ myBasic }) => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(600);

  const handleLogout = async () => {
    try {
      const res = await logout();
      console.log(res);
      useAuthStore.getState().logout();
      navigate("/login"); // 로그인 페이지로 이동
    } catch (error) {
      console.error("서버 로그아웃 실패:", error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleLogout(); // 자동 로그아웃
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, []);

  // 시간 형식 변환 (MM:SS)
  const formatTime = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, "0");
    const sec = String(seconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  return (
    <header className="flex border-b-2 justify-center gap-[504px] p-2 bg-white">
      <div className="flex space-x-3">
        <div className="w-12 h-12 rounded-xl font-extrabold text-xl bg-blue-800 text-white grid place-items-center">
          한이
        </div>

        <div className="flex flex-col">
          <span className="font-bold">한이대학교</span>
          <span className="text-sm text-gray-400">Han-I University</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2">
        {/* 학기 */}
        <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full min-w-[160px]">
          <Calendar size={18} />
          <span>
            {myBasic.semester ? (
              `2025학년도 ${myBasic.semester}`
            ) : (
              <span className="text-gray-300">학기 정보 로딩 중</span>
            )}
          </span>
        </div>

        {/* 학번 + 이름 */}
        <div className="flex items-center justify-center space-x-2 px-4 py-2 bg-gray-50 text-black text-sm font-medium rounded-full min-w-[182px]">
          <User size={18} />
          <span>
            {myBasic.identifier && myBasic.name ? (
              `${myBasic.identifier} ${myBasic.name}`
            ) : (
              <span className="text-gray-300">사용자 정보 로딩 중</span>
            )}
          </span>
        </div>

        <div className="text-sm text-red-500 font-semibold min-w-[80px] text-center">
          {formatTime(timeLeft)}
        </div>

        {/* 로그아웃 */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-1 text-black text-sm font-medium hover:text-red-500 transition-colors"
        >
          <LogOut size={18} />
          <span>로그아웃</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
