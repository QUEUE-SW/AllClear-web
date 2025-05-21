import { apiInterface } from "@/utils/apiInterface";

export const myBasicData = async () => {
  const res = await apiInterface("get", "/students/me");
  return res.data;
};
