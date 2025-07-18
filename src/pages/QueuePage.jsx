import { login } from "@/services/auth";
import { queueStatus } from "@/services/queue";
import { useAuthStore } from "@/stores/authStore";
import { useQueueStore } from "@/stores/queueStore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

/**
 * QueuePage.jsx
 *
 * 대기열 페이지입니다.
 *
 * - 사용자는 서비스를 들어오게 되면 바로 대기열 진입.
 * - 대기열 페이지에서 대기열 애니메이션을 통해 대기 중임을 확인.
 * - 대기열 진입 시 `/queue` 페이지로 이동 => ❎ 대기열 진입 api 연결
 * - 대기열 상태조회를 통해 대기순서 확인 => ❎ 구현해야함
 * - 자신의 순서가 되면 '/login' 페이지로 이동 => ❎ 구현해야함
 * - 대기 취소 버튼 동작 => ❎ 구현해야함
 */

const QueuePage = () => {
  const location = useLocation();
  const [filledCount, setFilledCount] = useState(0);
  const [queueNumber, setQueueNumber] = useState(() => {
    return location.state?.queueNumber ?? null;
  });

  const { clearCredentials } = useQueueStore.getState();
  const { uuid } = useParams();
  const { credentials } = useQueueStore(); // zustand에서 학번, 비번 불러오기
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const queueCancel = () => {
    // Todo 취소 api 요청
    clearCredentials();
    navigate("/login");
  };

  const handleLogin = async (id, pw, uuid) => {
    try {
      const res = await login(id, pw, uuid);
      // 로그인 성공 시 토큰 저장 후 enroll 페이지로 이동
      if (res.code === "2000") {
        setAccessToken(res.data.accessToken);
        navigate("/enroll");
      }
    } catch (error) {
      console.error(error);
      // LoginPage의 기존 에러처리 -> toast로 변경
      const status = error?.response?.status;
      const code = error?.response?.data?.code;
      const message = error?.response?.data?.message;

      if (status === 400 && code === "4000") {
        // 학번, 비밀번호 형식 오류
        toast.error(message);
      } else if (status === 401 && code === "4010") {
        // 비밀번호 미일치
        toast.error(message);
      } else if (status === 404 && code === "4040") {
        // 해당 학번 미존재
        toast.error(message);
      } else {
        toast.error("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
      navigate("/login");
    }
  };


  //SSE 연결
  useEffect(() => {
    if (!uuid) return;
    const eventSource = new EventSource(`${import.meta.env.VITE_API_BASE_QUEUE_URL}/api/v1/queue/sse/${uuid}`);

    if (!eventSource) return;

    // 입장 이벤트리스너
    eventSource.addEventListener("enterance", (event)=>{
      console.log("SSE 데이터: ", event.data);

      if(event.data === "입장 가능합니다."){
        eventSource.close();
        handleLogin(credentials.identifier, credentials.password, uuid);
      }

    // 오류 처리
    eventSource.onerror = (err) => {
      console.error("EventSource 에러: ", err);
      // 오류 발생 시 종료
      eventSource.close();
    }

    // 언마운트 시 SSE 종료
    return () => eventSource.close();
    },[])

  })

  // // 5초 간격으로 대기 순서 서버에게 받아오기
  // useEffect(() => {
  //   if (!uuid) return;

  //   let polling = setInterval(async () => {
  //     try {
  //       const res = await queueStatus({ uuid });
  //       console.log("queueStatus: ", res);

  //       setQueueNumber(res.queueNumber);
  //       console.log(res.queueStatus); // 디버깅용

  //       // 상태가 ALLOWED라면 polling 정지 후 로그인 시도
  //       if (res.queueStatus === "ALLOWED") {
  //         clearInterval(polling);
  //         handleLogin(credentials.identifier, credentials.password, uuid);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }, 5000);

  //   return () => clearInterval(polling);
  // }, []);

  // 첫 페이지 진입 시 캐싱된 정보가 없다면(url 조작으로 접속 시) 강제 리다이렉트
  useEffect(() => {
    if (!credentials.identifier || !credentials.password) {
      // Todo 취소 api 요청
      clearCredentials();
      navigate("/login");
    }
  }, []);

  // 새로고침이나 탭 닫기 시 강제 대기열 취소
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      // Todo 취소 api 요청
      clearCredentials();
      e.preventDefault();
      e.returnValue = ""; // 크롬에서 필수
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // 디버깅용 코드
  useEffect(() => {
    console.log("uuid:", uuid);
    console.log("identifier:", credentials.identifier);
    console.log("password:", credentials.password);
  }, [uuid, credentials]);

  // filledCount 수만큼 queueBars의 Bar 색 입히기
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
      // setInterval을 통해 0.5초마다 filledCount 수 1씩 증가
      setFilledCount((prev) => {
        // queueBars가 모두 채워진 경우 filledCount를 0으로 초기화
        if (prev >= 10) {
          return 0;
        }
        return prev + 1;
      });
    }, 500);

    // useEffect가 언마운트될때(페이지에서 벗어날 때) setInterval 함수 종료
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
            {/* 대기 순서는 '대기열 상태조회 api' 연결해야합니다. */}
            <span className="text-red-600 text-2xl font-bold px-2">
              {queueNumber}
            </span>
          </div>
          <div className="text-gray-500 text-xs/6 text-center">
            현재 접속 사용자가 많아 대기중이며,
            <br />
            잠시만 기다리시면 수강신청 서비스로 접속됩니다.
          </div>
        </div>
        <div
          onClick={queueCancel}
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
