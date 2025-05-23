import { apiInterface } from "@/utils/apiInterface";

/**
 * 강의 신청 요청
 * @param {number} courseId 신청할 강의 ID
 */
export const enrollCourse = async (courseId) => {
  const response = await apiInterface("post", "/enrollments", {
    courseId,
  });

  return response.data;
}

/**
 * 강의 신청 취소 요청
 * @param {number} courseId 신청할 강의 ID
 */
export const cancelEnrollment = async (enrollmentId) => {
  const response = await apiInterface("delete", `/enrollments/${enrollmentId}`);

  return response.data;
}