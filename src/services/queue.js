import { apiInterface } from "@/utils/apiInterface";

/**
 * 대기열 진입 요청
 * @param {{ token: string }} data - 클라이언트에서 생성한 UUID 토큰
 */
export const joinQueue = async ({ token }) => {
  const response = await apiInterface("post", "/queue/polling/join", {
    token,
  }, {}, false, "queue");
  console.log(response);

  return response;
};

/**
 * 대기열 상태 조회
 */
export const queueStatus = async ({ uuid }) => {
  const response = await apiInterface("get", `/queue/polling/${uuid}`, {}, {}, false, "queue");

  return response.data;
}