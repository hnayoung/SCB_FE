import React, { forwardRef } from 'react';
import makaoroma from "../../assets/makaoroma.png";
import "../style/home/MainImage.scss"
const MainImage = forwardRef((props, ref) => {
  return (
    <div className="main-container" ref={ref}>
      <img src={makaoroma} alt="로고" className="main-image" />
      <h2>상명대학교 스마트 코딩 배틀에 오신 걸 환영합니다.</h2>
    </div>
  );
});

export default MainImage;
