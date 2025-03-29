import React from "react";
import { BeatLoader } from "react-spinners";

const override = {
  display: "flex",
  justifyContent: "center", // ✅ 가로 중앙 정렬
  alignItems: "center", // ✅ 세로 중앙 정렬
  height: "100vh", // ✅ 화면 전체 높이 사용
  width: "100%", // ✅ 전체 너비 사용
};

function Loading() {
  return (
    <div style={override}>
      <BeatLoader
        color="#b8ceff"
        loading
        margin={5}
        size={15}
        speedMultiplier={1}
      />
    </div>
  );
}

export default Loading;
