import { apiInterface } from "@/utils/apiInterface";

/**
 * 수강신청 현황 api
 * @returns {Array} status
 */

export const getEnrollStatus = async () => {
  const res = await apiInterface("get", "/courses/me");
  return res.data;
};

/**
 * 수강신청 인원 조회 api
 * @returns {Array} capacities
 */

export const getCapacities = async () => {
  const res = await apiInterface("get", "/enrollments/capacities?ids=1");
  return res.data;
};
