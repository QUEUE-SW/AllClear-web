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
          <hr className="w-[622px] grow border-t border-gray-200" />
          {/* 안내 */}
          <div className="pl-4 py-2 bg-sky-50 border-l-4 border-sky-400 space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 bg-sky-100 text-sky-700 font-bold grid place-items-center">
                안내
              </div>
              <div className="text-gray-500">2025.02.02</div>
            </div>
            <div className="text-lg font-bold">시스템 점검 안내</div>
            <div className="text-gray-500">
              매일 02:00 ~ 04:00 시스템 점검으로 인한 서비스 중단
            </div>
          </div>
          <hr className="w-[622px] grow border-t border-gray-200" />
          {/* 정보 */}
          <div className="pl-4 py-2 bg-emerald-50 border-l-4 border-emerald-400 space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 bg-emerald-100 text-emerald-700 font-bold grid place-items-center">
                정보
              </div>
              <div className="text-gray-500">2025.02.02</div>
            </div>
            <div className="text-lg font-bold">수강신청 시 유의사항</div>
            <div className="text-gray-500 space-y-1">
              <li>졸업요건을 확인한 후 수강신청 하시기 바랍니다</li>
              <li>시간표 중복 및 선수과목 이수 여부를 확인하세요</li>
              <li>수강신청 변경기간: 2025년 3월 2일 ~ 3월 8일</li>
            </div>
          </div>
          <hr className="w-[622px] grow border-t border-gray-200" />
          {/* 문의 */}
          <div className="pl-4 py-2 bg-yellow-50 border-l-4 border-yellow-400 space-y-1 text-xs">
            <div className="flex items-center space-x-2">
              <div className="px-2 py-1 bg-yellow-100 text-yellow-700 font-bold grid place-items-center">
                문의
              </div>
              <div className="text-gray-500">상시</div>
            </div>
            <div className="text-lg font-bold">
              2025학년도 1학기 수강신청 일정 안내
            </div>
            <div className="text-gray-500 space-y-1">
              <li>한이음 드림업 팀 큐: 02-6344-8423 (평일 09:00~18:00)</li>
              <li>이메일: queue123@han.ac.kr</li>
              <li>방문상담: IT관 1층 114호 (평일 09:00~17:00)</li>
            </div>
          </div>
          {/* <hr className="w-[622px] grow border-t border-gray-200" /> */}
        </div>
      </div>
    </div>
  );
};

export default Announcement;
