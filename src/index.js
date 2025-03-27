import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // ✅ Redux Provider 추가
import { RouterProvider } from "react-router-dom"; 
import router from "./routes/router"; // ✅ 라우터 파일 확인
import store from "./redux/store/store"; // ✅ Redux store 가져오기
import "./index.css"; 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Redux Provider로 감싸기 */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
