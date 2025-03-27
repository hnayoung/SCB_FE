import React from "react";
import { Link } from "react-router-dom"; 
import "../style/Main/MenuBar.scss";
import logo from "../../assets/logo.png"; 

const MenuBar = ({ moveToHome, moveToIntro, moveToGuest, moveToPhoto }) => {
  return (
    <header className="menu-bar">
      <div className="menu-contents">
        <div className="menu-title">
          {/* 🔹 로고 클릭 시 홈 섹션으로 스크롤 이동 */}
          <a href="#home" onClick={moveToHome}>
            <img src={logo} alt="로고" className="logo-image" />
          </a>
        </div>
        <div className="menu-list">
          <div className="menu-item">
            <a href="#1"  onClick={moveToIntro}>학과 소개</a>
          </div>
          <div className="menu-item">
            <a href="#2"  onClick={moveToPhoto}>사진</a>
          </div>
          <div className="menu-item">
            <a href="#3" onClick={moveToGuest}>방명록</a>
          </div>
          <div className="menu-item">
            <Link to="/login">로그인</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;