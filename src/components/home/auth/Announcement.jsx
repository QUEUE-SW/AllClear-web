import React from "react";

const Announcement = () => {
  return (
    <div className="flex justify-center items-center text-sm">
      {/* 공지사항 컨테이너 */}
      <div className="w-[670px] h-[752px] border rounded-[8px] shadow-gray-300 shadow-[0px_6px_8px_rgba(0,0,0,0.25)] ">
        <div className="w-full bg-gray-50 px-8 py-6">
          <div className=" border-l-4 border-indigo-500 pl-4 text-xl font-extrabold">
            공지사항
          </div>
        </div>
        <div className="space-y-7 px-8 py-6">
          {/* 중요 */}
          <div className="pl-4 py-2 bg-rose-50 border-l-4 border-rose-400 space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 bg-rose-100 text-rose-700 font-bold grid place-items-center">
                중요
              </div>
              <div className="text-gray-500">2025.01.01</div>
            </div>
            <div className="text-lg font-bold">
              2025학년도 1학기 수강신청 일정 안내
            </div>
            <div className="text-gray-500">
              수강신청 기간: 2025년 2월 19일(수) 09:00 ~ 2025년 2월 23일(일)
              18:00
            </div>
          </div>
          <hr className="w-[622px] grow border-b border-gray-200" />
          {/* 중요 */}
          <div className="pl-4 py-2 bg-rose-50 border-l-4 border-rose-400 space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 bg-rose-100 text-rose-700 font-bold grid place-items-center">
                중요
              </div>
              <div className="text-gray-500">2025.01.01</div>
            </div>
            <div className="text-lg font-bold">
              2025학년도 1학기 수강신청 일정 안내
            </div>
            <div className="text-gray-500">
              수강신청 기간: 2025년 2월 19일(수) 09:00 ~ 2025년 2월 23일(일)
              18:00
            </div>
          </div>
          <hr className="w-[622px] grow border-b border-gray-200" />
          {/* 중요 */}
          <div className="pl-4 py-2 bg-rose-50 border-l-4 border-rose-400 space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 bg-rose-100 text-rose-700 font-bold grid place-items-center">
                중요
              </div>
              <div className="text-gray-500">2025.01.01</div>
            </div>
            <div className="text-lg font-bold">
              2025학년도 1학기 수강신청 일정 안내
            </div>
            <div className="text-gray-500">
              수강신청 기간: 2025년 2월 19일(수) 09:00 ~ 2025년 2월 23일(일)
              18:00
            </div>
          </div>
          <hr className="w-[622px] grow border-b border-gray-200" />
          {/* 중요 */}
          <div className="pl-4 py-2 bg-rose-50 border-l-4 border-rose-400 space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 bg-rose-100 text-rose-700 font-bold grid place-items-center">
                중요
              </div>
              <div className="text-gray-500">2025.01.01</div>
            </div>
            <div className="text-lg font-bold">
              2025학년도 1학기 수강신청 일정 안내
            </div>
            <div className="text-gray-500">
              수강신청 기간: 2025년 2월 19일(수) 09:00 ~ 2025년 2월 23일(일)
              18:00
            </div>
          </div>
          <hr className="w-[622px] grow border-b border-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Announcement;
