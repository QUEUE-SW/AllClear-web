import { apiInterface } from "@/utils/apiInterface";

/**
 * 강의 목록 조회 api
 * @returns {Array} courses
 */
export const getCourses = async () => {
  const res = await apiInterface("get", "/courses");
  return res.data;
};

/**
 * 수강신청 현황 api
 * @returns {Array} status
 */

export const getEnrollStatus = async () => {
  const res = await apiInterface("get", "/courses/me");
  return res.data;
};
