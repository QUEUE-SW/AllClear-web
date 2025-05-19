import { apiInterface } from "@/utils/apiInterface";

/**
 * 학점 조회
 * @return {object} credits
 */
export const getCredits = async () => {
  const res = await apiInterface("get", "/student_polices/credits");
  return res.data;
};
