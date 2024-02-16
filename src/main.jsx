import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Routes/router.jsx";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-full mx-auto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
