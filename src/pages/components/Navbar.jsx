import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://github.com/hnayoung/scb_image/blob/main/상명대학교_스정통마크.png?raw=true" 
             alt="상명대학교 스마트정보통신공학과" />
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      {/* 아래 ul 요소의 className 수정 */}
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/board">게시판</Link></li>
        <li><Link to="/community">커뮤니티</Link></li>
        <li><Link to="/codereview">코드 분석</Link></li>
        <li><Link to="/ranking">랭킹</Link></li>
        {/* <li><Link to="/settings" className="stjt">스정통</Link></li> */}
        <li><Link to="/mypage">마이페이지</Link></li>
        <button className='login'>로그인</button>
      </ul>
    </nav>
  );
};

export default Navbar;