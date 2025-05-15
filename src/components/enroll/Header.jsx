import React from "react";

const Header = () => {
  return (
    <div className="p-3 bg-gray-50 flex justify-between border-b border-gray-500 shadow-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.25),inset_1px_1px_10px_rgba(0,0,0,5)]">
      <h2 className="text-3xl">영남대학교 수강신청</h2>
      <div className="flex gap-10 items-center">
        <div className="flex text-gray-500 gap-3">
          <p>2025-1학기</p>
          <p>22012077</p>
          <p>박지원</p>
        </div>
        <div className="text-red-500">25:01</div>
        <button className="bg-red-500 text-white rounded-md px-4 py-1 shadow-[0px_5px_10px_rgba(0,0,0,0.3)] hover:shadow-[0px_8px_10px_rgba(0,0,0,0.3),inset_10px_10px_30px_rgba(190,0,0,5)]">
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Header;
