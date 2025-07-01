import { createBrowserRouter } from "react-router-dom";
import home from "@/router/home";

import auth from "./auth";
import enroll from "./enroll";
import queue from "./queue";

const router = createBrowserRouter([
  {
    path: "/",
    children: [...home, ...auth, ...enroll, ...queue],
  },
]);

export default router;
