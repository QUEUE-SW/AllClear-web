import { RouterProvider } from "react-router-dom";
import router from "@/router/root";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
