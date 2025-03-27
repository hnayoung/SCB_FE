import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./QuestionDetailPage.scss";
import Navbar from "../pages/components/Navbar";
import styled from "styled-components";


const QuestionDetailPage = () => {
  const { category, questionId } = useParams();
  const [likes, setLikes] = useState(0);

  const handleLikes = () => {
    setLikes(likes + 1);
  }
  
  
  // ✅ Redux에서 질문 목록을 가져오고, 배열이 아니면 빈 배열을 기본값으로 설정
  const questions = useSelector((state) => state.questions.questions[category]) || [];

  console.log(`현재 ${category} 질문 리스트:`, questions); // ✅ Redux 상태 확인

  // ✅ `questions`가 배열인지 확인 후 `.find()` 실행
  if (!Array.isArray(questions)) {
    console.error("❌ questions가 배열이 아닙니다:", questions);
    return <p>❌ 질문 데이터를 불러올 수 없습니다.</p>;
  }

  // ✅ `questionId`를 숫자로 변환하여 비교
  const question = questions.find((q) => q.id === Number(questionId));

  if (!question) {
    return <p>❌ 질문을 찾을 수 없습니다.</p>;
  }

  const NavLink = styled(Link)`
    text-decoration: none;
    color: #867C7C;
  `;

  return (
    <div className="question-detail">
      <Navbar />
      <aside className="sidebar">
        <ul>
          <li className={category === "study" ? "active" : ""}>
            <NavLink to="/community/study">학습 질문</NavLink>
          </li>
          <li className={category === "major" ? "active" : ""}>
            <NavLink to="/community/major">학과 질문</NavLink>
          </li>
          <li className={category === "talk" ? "active" : ""}>
            <NavLink to="/community/talk">소통해요</NavLink>
          </li>
        </ul>
      </aside>
        <main className="content-container">
          <p>
            <span className="query-title">{question.title}</span>
            <span className="save-icon">
              <img src="https://github.com/hnayoung/scb_image/blob/main/save_icon.png?raw=true" alt="저장아이콘"></img>
            </span>
          </p>
          <p className="query-selected">[{question.selectedGrade}/{question.selectedSemester}]&nbsp;{question.selectedCourse}&nbsp;&gt;&nbsp;주차</p>
          <p className="query-author">
            <span className="query-avatar">사진</span>
            <span className="query-name">김*림</span>
            <span className="query-times">&nbsp;&nbsp;43분 전</span>
            <span className="stats-items">
              <span className="stats-comments">댓글 {question.comments || 0}</span>
              <span className="stats-likes">&nbsp;・ 추천 {question.likes || 0}</span>
              <span className="stats-views">&nbsp;・ 조회수 {question.views || 1}</span>
            </span>
          </p>
          <hr/>
          <p className="query-content">{question.content}</p>
          <p className="content-buttons">
          <button className="content-button">
            <img src="https://github.com/hnayoung/scb_image/blob/main/share-icon.png?raw=true" alt="공유 아이콘" />
            공유
          </button>
          <button className="content-button" onClick={handleLikes}>
            <img src="https://github.com/hnayoung/scb_image/blob/main/like-icon.png?raw=true" alt="좋아요 아이콘" />
            추천해요 {likes}
          </button>
          </p>
          <hr/>
        </main>
    </div>
  );
};

export default QuestionDetailPage;
