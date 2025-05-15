import React from "react";

const CourseCard = ({ title, course, isRegister }) => {
  const mockCredits = {
    "totalCredit": 6,
    "maxCredit": 18,
    "remainingCredit": 12
  }
  return (
    <div className="border w-[515px] bg-gray-100 rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between border-b-2 border-gray-200 px-4 py-2">
        <div className="text-xl">{title}</div>
        <div>{course.length}개 강의</div>
      </div>
      <div className="flex border-slate-400 text-sm p-2 text-center text-gray-400">
        <div className="w-[55px]">강의 번호</div>
        <div className="w-[60px]">강의명</div>
        <div className="w-[70px]">교수명</div>
        <div className="w-[85px]">시간</div>
        <div className="w-[70px]">여석현황</div>
        <div className="w-[65px]">강의실</div>
        <div className="w-[30px]">학점</div>
        {/* <div className="w-[60px]">버튼임당</div> */}
      </div>
      <div className="flex flex-col w-full h-[550px] justify-between">
        <div>
          {course.map((e) => (
            <div
              key={e.courseId}
              className="flex p-2 h-20 text-sm items-center text-center bg-white border-gray-200 border-b"
            >
              <div className="w-[55px]">{e.courseCode}</div>
              <div className="w-[60px]">{e.name}</div>
              <div className="w-[70px]">{e.professor}</div>
              <div className="w-[85px] text-xs">
                {e.time1}
                <br />
                {e?.time2}
              </div>
              <div className="w-[70px]">{e.capacity}</div>
              <div className="w-[65px]">{e.location}</div>
              <div className="w-[30px]">{e.credit}</div>
              {!isRegister ? (
                <button className="w-[60px]">신청</button>
              ) : (
                <button className="w-[60px]">취소</button>
              )}
            </div>
          ))}
        </div>
        {isRegister && (
          <div className="flex border-t justify-between text-sm p-3">
            <div>총 학점: {mockCredits.totalCredit}</div>
            <div className="flex gap-4">
              <div>최대 신청 가능 학점: {mockCredits.maxCredit}</div>
              <div>남은 신청 가능 학점: {mockCredits.remainingCredit}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
