import { createBrowserRouter } from "react-router-dom";
import home from "@/router/home";

const router = createBrowserRouter([
  {
    path: "/",
    children: [...home],
  },
]);

export default router;
