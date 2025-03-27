import React from 'react';
import { Link } from 'react-router-dom';
import './intro.scss';
import logo from '경로/로고이미지.png';

const Intro = () => {
  return (
    <div className="intro-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="상명대학교 스마트정보통신공학과" />
        </div>
        <ul className="menu">
          <li><Link to="/about">학과 소개</Link></li>
          <li><Link to="/photos">사진</Link></li>
          <li><Link to="/guestbook">방명록</Link></li>
          <li><Link to="/login" className="login">로그인</Link></li>
        </ul>
      </nav>
      <div className="content">
        <section id="about" className="section">학과 소개</section>
        <section id="photos" className="section">사진</section>
        <section id="guestbook" className="section">방명록</section>
      </div>
    </div>
  );
};

export default Intro;
