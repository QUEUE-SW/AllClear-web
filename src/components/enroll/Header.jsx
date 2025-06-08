import { useAuthStore } from "@/stores/authStore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User, LogOut } from "lucide-react";

const Header = ({ myBasic }) => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    navigate("/login");
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

      <div className="flex justify-center items-center gap-4">
        {/* 학기 */}
        <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full">
          <Calendar size={18} />
          <span>2025학년도 {myBasic.semester}</span>
        </div>

        {/* 학번 + 이름 */}
        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-50 text-black text-sm font-medium rounded-full">
          <User size={18} />
          <span>
            {myBasic.identifier} {myBasic.name}
          </span>
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
