import React, { useEffect, useState } from "react";
import { getCredits } from "@/services/student";
import { GraduationCap, CheckCircle, PlusCircle } from "lucide-react";

const CreditsStatus = () => {
  const [credits, setCredits] = useState({
    totalCredit: null,
    maxCredit: null,
    remainingCredit: null,
  });

  const getCreditData = async () => {
    try {
      const res = await getCredits();
      setCredits(res);
    } catch (error) {
      console.error("학점 조회 실패", error);
    }
  };

  useEffect(() => {
    getCreditData();
  }, []);

  return (
    <div className="flex justify-between items-center w-[896px] h-[100px] px-6 bg-white rounded-xl shadow-md">
      {/* 좌측: 타이틀 */}
      <div className="flex items-center text-2xl font-extrabold text-black gap-1">
        학점 현황
        <span className="text-gray-500 text-base font-semibold">
          ({credits.totalCredit}/{credits.maxCredit}학점)
        </span>
      </div>

      {/* 우측: 각 항목 */}
      <div className="flex items-center gap-7 text-sm font-semibold">
        {/* 총 신청 학점 */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
            <GraduationCap size={18} className="text-blue-500" />
          </div>
          <div className="flex items-center text-black">
            총 신청 학점
            <span className="ml-1 text-blue-600 text-xl">
              {credits.totalCredit}
            </span>
          </div>
        </div>

        {/* 남은 신청 가능 */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle size={18} className="text-green-500" />
          </div>
          <div className="flex items-center text-black">
            남은 신청 가능
            <span className="ml-1 text-green-600 text-xl">
              {credits.remainingCredit}
            </span>
          </div>
        </div>

        {/* 최대 신청 가능 */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
            <PlusCircle size={18} className="text-purple-500" />
          </div>
          <div className="flex items-center text-black">
            최대 신청 가능
            <span className="ml-1 text-purple-600 text-xl">
              {credits.maxCredit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditsStatus;
