import { apiInterface } from "@/utils/apiInterface";

/**
 * 로그인 요청
 * @param {string} stdId 학번
 * @param {string} password 비밀번호
 */
export const login = async (identifier, password) => {
  const response = await apiInterface(
    "post",
    "/auth/sign-in",
    { identifier, password },
    {},
    false
  );
  return response;
};

/**
 * 회원가입 요청
 * @param {Object} payload - 회원가입 정보
 */
export const signUp = async (payload) => {
  const response = await apiInterface(
    "post",
    "/auth/sign-up",
    payload,
    {},
    false
  );
  return response;
};