import { apiInterface } from "@/utils/apiInterface";

/**
 * 필터링 적용된 강의 목록 조회 api
 * @returns {Array} courses
 */
export const getCourses = async (filters) => {
  const res = await apiInterface("get", "/courses/filters", {}, filters);
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

/**
 * 수강신청 인원 조회 api
 * @returns {Array} capacities
 */

export const getCapacities = async (ids) => {
  const res = await apiInterface("post", "/enrollments/capacities", { ids });
  console.log("인원 조회", res);
  return res.data;
};
