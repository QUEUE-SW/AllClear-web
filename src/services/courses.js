import { apiInterface } from "@/utils/apiInterface";

/**
 * 수강신청 현황 api
 * @returns {Array} status
 */

export const getEnrollStatus = async () => {
  const res = await apiInterface("get", "/courses/me");
  return res.data;
};
