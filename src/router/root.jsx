import { createBrowserRouter } from "react-router-dom";
import home from "@/router/home";

import auth from "./auth";
import enroll from "./enroll";

const router = createBrowserRouter([
  {
    path: "/",
    children: [...home, ...auth, ...enroll],
  },
]);

export default router;
