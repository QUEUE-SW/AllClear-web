import EnrollForm from "@/components/enroll/EnrollForm";
import Header from "@/components/enroll/Header";
import { myBasicData } from "@/services/student";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const EnrollPage = () => {
  const [myBasic, setMyBasic] = useState({
    name: "",
    studentId: "",
    semester: "",
  });

  const getMyBasic = async () => {
    try {
      const res = await myBasicData();
      console.log(res);
      setMyBasic(res);
    } catch (error) {
      console.log("내 기본 정보 조회 실패", error);
    }
  };

  useEffect(() => {
    getMyBasic();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col">
      {/* 고정 헤더 */}
      <Header myBasic={myBasic} />

      {/* 본문 영역 */}
      <main className="flex-1 flex justify-center items-center px-6 py-10">
        <div className="w-full max-w-4xl">
          <EnrollForm />
        </div>
      </main>
    </div>
  );
};

export default EnrollPage;
