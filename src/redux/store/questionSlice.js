import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: {
    study: [], // ✅ 학습 질문
    major: [], // ✅ 학과 질문
    talk: [], // ✅ 소통해요
  },
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      const { category } = action.payload; // ✅ 질문의 카테고리 가져오기
      state.questions[category].unshift(action.payload); // ✅ 해당 카테고리에 추가
    },
  },
});

export const { addQuestion } = questionSlice.actions;
export default questionSlice.reducer;
