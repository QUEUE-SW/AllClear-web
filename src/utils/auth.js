import { useAuthStore } from "@/store/auth";

/**
 * 현재 accessToken 값을 반환합니다.
 * @returns {string} accessToken
 */
export const getAccessToken = () => {
  return useAuthStore.getState().accessToken;
};
