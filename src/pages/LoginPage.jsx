import React from "react";

const LoginPage = () => {
  const inputStyle =
    "bg-gray-200 text-gray-500 border border-gray-300 rounded-3xl w-full p-4";
  const lineStyle="grow border border-gray-300";

  return (
    // 중앙정렬
    <div className="flex justify-center items-center h-screen">
      {/* 로그인 컨테이너 */}
      <div className="border bg-gray-100 rounded-[45px] p-8 w-[630px] h-[550px] shadow-gray-300 shadow-[10px_10px_10px_rgba(0,0,0,0.25),inset_1px_1px_10px_rgba(0,0,0,5)] ">
        <div className="text-3xl mb-10">영남대학교 수강신청</div>
        {/* 폼 */}
        <div className="space-y-3">
          <input type="text" className={inputStyle} placeholder="학번"/>
          <input type="password" className={inputStyle} placeholder="비밀번호"/>
        </div>
        <div className="cursor-pointer my-8 bg-indigo-500 text-white text-center rounded-lg p-4 shadow-lg shadow-indigo-500/50 hover:shadow-indigo-600/70 hover:shadow-[inset_10px_10px_10px]">
          로그인
        </div>
        <div className="flex items-center text-gray-400 mx-5">
          <hr className={lineStyle}/>
          <span className="mx-5">또는</span>
          <hr className={lineStyle}/>
        </div>
        <div className="cursor-pointer my-8 bg-white text-center rounded-lg p-4 shadow-gray-300/50 hover:shadow-indigo-300/50 shadow-[inset_3px_3px_3px_rgba(0,0,0,5)] hover:shadow-[10px_10px_10px,inset_1px_1px_5px]">
          회원가입
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
