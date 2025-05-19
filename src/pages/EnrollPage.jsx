import EnrollForm from "@/components/enroll/EnrollForm";
import Header from "@/components/enroll/Header";
import { myBasicData } from "@/services/student";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const EnrollPage = () => {
  const [myBasic, setMyBasic] = useState({
    name: "박지원",
    studentId: "22012077",
    semester: "1학기",
  });

  const getMyBasic = async () => {
    try {
      const res = myBasicData();
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
    <div className="w-full h-screen bg-gray-50">
      <Header myBasic={myBasic} />
      <div className="w-full h-[calc(100vh-60px)] flex justify-center items-center">
        <EnrollForm />
      </div>
    </div>
  );
};

export default EnrollPage;
