import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";

const auth = [
  {
    path: "signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
];

export default auth;
