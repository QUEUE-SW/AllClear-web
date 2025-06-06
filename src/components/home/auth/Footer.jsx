import React from "react";

const Footer = () => {
  const titleStyle = "font-extrabold pb-2 text-base";
  const contentStyle = "text-slate-500";
  return (
    <div className="w-full bg-gray-100 border border-gray-200 grid place-items-center text-sm">
      <div className="w-[1242px]">
        {/* main helper */}
        <div className="flex pt-6 pb-4">
          {/* 대학교 */}
          <div className="mr-48">
            <div className={titleStyle}>한이대학교</div>
            <div className={contentStyle}>
              경기도 안산시 단원구 중앙대로 421 206호
            </div>
          </div>
          {/* 문의처 */}
          <div className="mr-48">
            <div className={titleStyle}>문의처</div>
            <div className={contentStyle}>
              대표전화: 02-6022-1375
              <br />
              한이음 드림업 팀 큐: 02-6344-8423
            </div>
          </div>
          {/* 관련사이트 */}
          <div>
            <div className={titleStyle}>관련 사이트</div>
            <div className="flex flex-col text-indigo-700">
              <a href="https://www.yu.ac.kr/main/index.do">대학 홈페이지</a>
              <a href="https://www.hanium.or.kr/portal/index.do">
                한이음 드림업 홈페이지
              </a>
              <a href="https://github.com/QUEUE-SW">깃허브</a>
            </div>
          </div>
        </div>

        <hr className="mt-5 grow border-t border-gray-200" />

        <div className="text-xs text-center text-slate-500 p-5">
          ⓒ 2025 Team Queue. All rights reserved. | 개인정보처리방침 | 이용약관
        </div>
      </div>
    </div>
  );
};

export default Footer;
