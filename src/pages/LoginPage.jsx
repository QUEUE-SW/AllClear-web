import React from "react";

const LoginPage = () => {
  const inputStyle =
    "bg-gray-200 text-gray-500 border border-gray-300 rounded-3xl w-full 2xl:text-lg px-4 py-2 lg:text-sm lg:py-3";
  const lineStyle="grow border-t border-gray-300";

  return (
    // 중앙정렬
    <div className="flex justify-center items-center h-screen">
      {/* 로그인 컨테이너 */}
      <div className="border bg-gray-100 rounded-[45px] 2xl:p-10 p-8 2xl:w-[630px] lg:w-[430px] w-[300px] 2xl:h-[550px] h-[370px] shadow-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.25),inset_1px_1px_10px_rgba(0,0,0,5)] ">
        <div className="2xl:text-3xl text-xl 2xl:mb-10 mb-6">영남대학교 수강신청</div>
        {/* 폼 */}
        <div className="2xl:space-y-3 space-y-2">
          <input type="text" className={inputStyle} placeholder="학번"/>
          <input type="password" className={inputStyle} placeholder="비밀번호"/>
        </div>
        <div className="cursor-pointer 2xl:my-8 2xl:p-4 my-5 p-2 bg-indigo-500 text-white text-center rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-600/70 hover:shadow-[inset_10px_10px_10px]">
          로그인
        </div>
        <div className="flex items-center text-gray-400 mx-5 2xl:text-md lg:text-sm">
          <hr className={lineStyle}/>
          <span className="mx-5 2xl:my-3">또는</span>
          <hr className={lineStyle}/>
        </div>
        <div className="cursor-pointer 2xl:my-8 2xl:p-4 my-5 p-2 bg-white text-center rounded-lg shadow-gray-300/50 hover:shadow-indigo-300/50 shadow-[inset_3px_3px_3px_rgba(0,0,0,5)] hover:shadow-[10px_10px_10px,inset_1px_1px_5px]">
          회원가입
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
