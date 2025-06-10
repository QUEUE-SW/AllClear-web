import Announcement from "@/components/home/auth/Announcement";
import Footer from "@/components/home/auth/Footer";
import Header from "@/components/home/auth/Header";
import React from "react";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="text-center py-14">
        <h1 className="text-3xl font-extrabold">AllClear 수강신청 시스템</h1>
        <span className="text-gray-500">Course Registration System</span>
      </div>
      <div className="flex flex-1 flex-row justify-center items-start space-x-12 min-h-[900px]">
        <Outlet />
        <Announcement />
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
