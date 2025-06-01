export const isValidStudentId = (studentId) => /^[0-9]{8}$/.test(studentId);

export const isValidKoreanName = (name) => /^[가-힣]{2,18}$/.test(name);
