import { createBrowserRouter } from "react-router-dom";
import home from "@/router/home";

import auth from "./auth";

const router = createBrowserRouter([
  {
    path: "/",
    children: [...home, ...auth],
  },
]);

export default router;
