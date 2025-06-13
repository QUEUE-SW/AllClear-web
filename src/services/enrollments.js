import { apiInterface } from "@/utils/apiInterface";

/**
 * 강의 신청 요청
 * @param {number} courseId 신청할 강의 ID
 */
export const enrollCourse = async (courseId) => {
  const response = await apiInterface("post", "/enrollments", {
    courseId,
  });
  console.log(response)

  return response.data;
}