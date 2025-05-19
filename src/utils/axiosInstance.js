import axios from "axios";
import { getAccessToken } from "./auth";

/**
 * axios 기반의 공통 API 인스턴스를 생성하고, 인증이 필요한 요청과 그렇지 않은 요청을 구분하여 처리하는 역할을 합니다.
 * 
 * baseConfig: 모든 요청에 공통 적용될 설정 (baseURL, timeout, headers 등)
 * publicInstance: 인증 토큰 없이 요청을 보낼 때 사용하는 axios 인스턴스
 * tokenInstance: 인증 토큰(accessToken)을 자동으로 포함시키는 axios 인스턴스
 * 
 * 요청 시 accessToken이 있으면 자동으로 Authorization 헤더에 추가됨
*/

const baseConfig = {
  baseURL: "/api/v1",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const tokenInstance = axios.create(baseConfig);
const publicInstance = axios.create(baseConfig);

tokenInstance.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

tokenInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
)

export { tokenInstance, publicInstance };