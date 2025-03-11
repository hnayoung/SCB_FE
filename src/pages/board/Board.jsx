import React from 'react';
import Navbar from '../components/Navbar';
import './Board.scss';

const Board = () => {
  return (
    <div className="board-container">
      <Navbar />
      <div className="profile-section">
        <div className="profile-picture">
          <img src="https://github.com/hnayoung/scb_image/blob/main/share.png?raw=true" alt="프로필" />
        </div>
        <div className="profile-info">
          <p>202021060/스정통/박근표</p>
          <input type="text" placeholder="github 아이디" />
          <input type="text" placeholder="이메일 주소" />
          <input type="text" placeholder="분야" />
        </div>
      </div>
      <div className="projects-reviews-section">
        <div className="projects-section">
          <div className='left-border'></div>
          <h3>My project</h3>
          <div className="projects">
            <div className="project-card">noonaproject <span>Public</span> <span>JavaScript</span></div>
            <div className="project-card">noonaproject-weather <span>Public</span> <span>JavaScript</span></div>
            <div className="project-card">noona-hmm <span>Public</span> <span>JavaScript</span></div>
            <div className="project-card">kpass-front <span>Public</span> <span>JavaScript</span></div>
            <div className="project-card">kpass-back <span>Public</span> <span>JavaScript</span></div>
            <div className="project-card">egproject <span>Public</span> <span>JavaScript</span></div>
          </div>
        </div>
        <div className="review-section">
          <h3>My review</h3>
          <textarea placeholder="리뷰를 입력하세요..."></textarea>
          <button className="add-review-button">+</button>
        </div>
      </div>
    </div>
  );
};

export default Board;
