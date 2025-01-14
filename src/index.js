import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom"; // 또는 BrowserRouter
import router from "./routes/router"; // 경로 확인

import "./index.css"; // 스타일 파일

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);