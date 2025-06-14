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
      // console.log(res);
      setMyBasic(res.data);
    } catch (error) {
      console.log("내 기본 정보 조회 실패", error);
    }
  };

  useEffect(() => {
    getMyBasic();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-sky-50">
      {/* 고정 헤더 */}
      <Header myBasic={myBasic} />

      {/* 본문 영역 */}
      <main className="flex justify-center items-center mt-[12px]">
        <EnrollForm />
      </main>
    </div>
  );
};

export default EnrollPage;
