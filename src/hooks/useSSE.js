import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";

export const useSSE = ({ uuid, onAllowed }) => {
  const [queueNumber, setQueueNumber] = useState(-1);

  // SSE 연결
  useEffect(() => {
    if (!uuid) return;

    if (queueNumber < 0) {
      toast.warn("대기순서를 불러오는 중입니다. 잠시만 기다려 주세요.");
    }

    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_BASE_QUEUE_URL}/api/v1/queue/sse/${uuid}`
    );

    if (!eventSource) return;

    eventSource.onopen = () => {
      console.log("SSE 연결 성공!");
    };

    // 대기 순번 이벤트리스너
    eventSource.addEventListener("waiting", (event) => {
      const data = JSON.parse(event.data);
      console.log("waiting SSE 데이터: ", data);
      setQueueNumber(data.number);
    });

    // 허용 이벤트리스너
    eventSource.addEventListener("allowed", (event) => {
      const data = JSON.parse(event.data);
      console.log("allowed SSE 데이터: ", data);

      // Allowed 상태가 되면 SSE 닫은 후 onAllowed 콜백함수 실행
      if (data.status === "ALLOWED") {
        eventSource.close();
        onAllowed?.(); // QueuePage에서 handleLogin 실행됨.
      }
    });

    // 오류 발생 시 SSE 종료
    eventSource.onerror = (err) => {
      console.error("EventSource 에러: ", err);
      toast.error("연결에 문제가 발생했습니다. 다시 시도해주세요.");
      eventSource.close();
    };

    // 언마운트 시 SSE 종료
    return () => eventSource.close();
  }, []);

  return { queueNumber };
};
