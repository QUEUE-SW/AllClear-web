import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const QueuePage = () => {
  const [filledCount, setFilledCount] = useState(0);
  const queueBars = [];
  for (let i = 1; i <= 10; i++) {
    filledCount >= i
      ? queueBars.push(
          <span key={i} className="w-[20px] h-[54px] bg-blue-500 rounded" />
        )
      : queueBars.push(
          <span key={i} className="w-[20px] h-[54px] bg-gray-200 rounded" />
        );
  }

  useEffect(() => {
    const queueInterval = setInterval(() => {
      setFilledCount((prev) => {
        if (prev >= 10) {
          return 0;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(queueInterval);
  }, []);
  return (
    <div className="bg-indigo-50 min-h-screen grid place-items-center">
      <div className="bg-white w-[600px] h-[465px] py-8 grid place-items-center border rounded-[8px] shadow-gray-300 shadow-[0px_6px_8px_rgba(0,0,0,0.25)] ">
        <div className="text-3xl font-bold tracking-widest">
          수강신청 대기 중입니다.
        </div>
        <div className="w-[255px] h-[55px] my-1 flex items-center justify-between">
          {queueBars}
        </div>
        <div className="w-[350px] h-[140px] p-3 border-2 border-gray-200 rounded-[8px] bg-gray-100 grid place-items-center">
          <div className="text-xl">
            대기순서:
            <span className="text-red-600 font-bold px-2">1234</span>
          </div>
          <div className="text-gray-500 text-xs/6 w-[250px] text-center">
            현재 접속 사용자가 많아 대기중이며,
            <br />
            잠시만 기다리시면 수강신청 서비스로 접속됩니다.
          </div>
        </div>
        <div
          className="cursor-pointer w-[380px] h-[44px]
             bg-indigo-700 text-white
             rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] 
             hover:bg-indigo-800 active:bg-indigo-900 
             transition duration-200 ease-in-out 
             hover:scale-[1.02] active:scale-[0.98]
             flex items-center justify-center"
        >
          대기 취소
        </div>
      </div>
    </div>
  );
};

export default QueuePage;
