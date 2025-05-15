import EnrollForm from "@/components/enroll/EnrollForm";
import Header from "@/components/enroll/Header";
import React from "react";

const EnrollPage = () => {
  return (
    <div className="w-full h-screen bg-gray-50">
      <Header />
      <div className="w-full h-[calc(100vh-60px)] flex justify-center items-center">
        <EnrollForm />
      </div>
    </div>
  );
};

export default EnrollPage;
