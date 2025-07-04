import { apiInterface } from "@/utils/apiInterface";

/**
 * 대기열 진입 요청
 * @param {{ token: string }} data - 클라이언트에서 생성한 UUID 토큰
 */
export const joinQueue = async ({ token }) => {
  const response = await apiInterface("post", "/queue/join", {
    token,
  });
  console.log(response);

  return response;
};
