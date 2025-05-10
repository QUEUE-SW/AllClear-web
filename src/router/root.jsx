import { createBrowserRouter } from "react-router-dom";
import home from "@/router/home";
import LoginPage from "@/pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    children: [...home],
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
]);

export default router;
