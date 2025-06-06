import React from "react";

const Header = () => {
  return (
    <div className="flex border-b-2 justify-around p-2">
      {/* 왼쪽 */}
      <div className="flex space-x-3">
        <div className="w-12 h-12 rounded-xl bg-blue-600 text-white grid place-items-center">한이</div>
        <div>
          <div className="font-bold">한이대학교</div>
          <div className="text-sm text-gray-400">Han-I University</div>
        </div>
      </div>
      {/* 오른쪽 */}
      <div className="flex flex-col justify-center items-end text-xs text-gray-400">
        <div className="font-bold">수강신청 시스템</div>
        <div>Course Registration System</div>
      </div>
    </div>
  );
};

export default Header;
