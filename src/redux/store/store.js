import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionSlice"; // ✅ 질문 관련 slice 추가

const store = configureStore({
  reducer: {
    questions: questionReducer, // ✅ Redux에서 질문 상태 관리
  },
});

export default store;



