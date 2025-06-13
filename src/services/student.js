import { apiInterface } from "@/utils/apiInterface";

/**
 * 이름 및 학번 조회 api
 * @returns {object} basicData
 */
export const myBasicData = async () => {
  const res = await apiInterface("get", "/students/me");
  // console.log(res)
  return res.data;
};

/**
 * 학점 조회 api
 * @return {object} credits
 */
export const getCredits = async () => {
  const res = await apiInterface("get", "/student_polices/credits");
  // console.log(res)
  return res.data;
};
