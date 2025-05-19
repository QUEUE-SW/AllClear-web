import { publicInstance, tokenInstance } from "@/utils/axiosInstance"

/**
 * 이 함수는 공통적으로 API 요청을 처리하는 래퍼 함수입니다.
 * 
 * 컴포넌트나 서비스 레이어에서 axios를 직접 쓰는 대신,
 * 이 함수를 통해 일관된 방식으로 요청을 보내고,
 * 인증 토큰 사용 여부(useToken)에 따라 적절한 axios 인스턴스를 자동으로 선택합니다.
 * 
 * method, url, data, params만 입력하면 API 요청 가능
 * useToken=true이면 tokenInstance(Authorization 헤더 포함)를 사용
 * useToken=false이면 publicInstance(비인증 요청용)를 사용
 * 
 * 사용 예시:
 * await apiInterface("post", "/auth/sign-in", { identifier, password }, {}, false);
 * await apiInterface("get", "/user/profile");
 * 
 * 공통 API 요청 함수
 * @param {'get'|'post'|'put'|'delete'} method
 * @param {string} url
 * @param {object} data
 * @param {object} params
 * @param {boolean} useToken
 * @returns {Promise<any>}
 */
export const apiInterface = async (
  method,
  url,
  data = {},
  params = {},
  useToken = true
) => {
  const client = useToken ? tokenInstance : publicInstance;
  try {
    const response = await client({ method, url, data, params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}