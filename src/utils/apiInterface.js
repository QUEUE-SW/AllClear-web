import { publicInstance, tokenInstance } from "@/utils/axiosInstance"

/**
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