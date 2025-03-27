import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Community.scss"; 
import { useParams, Link } from "react-router-dom";
import QuestionModal from "./QuestionModal"; 
import styled from "styled-components";
import QuestionForm from "../../components/QuestionForm";
import { useSelector, useDispatch } from "react-redux";
import { addQuestion } from "../../redux/store/questionSlice"; // ✅ Redux 액션 추가

const Community = () => {

  const { category } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false); //모달 상태 추가 
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions[category])  || [];; // ✅ Redux에서 질문 리스트 가져오기

  // ✅ Redux에 새로운 질문 추가 (setQuestions 대신 dispatch 사용)
  const handleNewQuestion = (newQuestion) => {
    dispatch(addQuestion(newQuestion)); // ✅ Redux Store에 추가
    console.log("✅ 업데이트된 질문 리스트:", questions);
  };

  
   // 각 카테고리에 대한 콘텐츠를 정의
   const content = {
    study: {
      title: "학습 질문",
      description: "수업을 들으며 생긴 어려웠던 내용, 오류를 질문해보아요 ~",
    },
    major: {
      title: "학과 질문",
      description: "학과 생활에 대한 궁금증을 질문해보세요 ~",
    },
    talk: {
      title: "소통해요",
      description: "스정통 학우들과 자유롭게 소통하고 의견을 나눠보아요 ~",
    },
  };
  
  
  // 현재 카테고리에 해당하는 콘텐츠를 가져옴
  const currentContent = content[category];

  const NavLink = styled(Link)`
    text-decoration: none;
    color: #867C7C;
  `;
  
  return (
    <div>
      <Navbar />
      <div className="community-container">
       {/* 왼쪽 사이드바 */}
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
        <button className="ask-button" onClick={() => setIsModalOpen(true)}>
          질문하기
        </button>
      </aside>

      {/* 오른쪽 메인 컨텐츠 */}
        <main className="content">
        {currentContent ? (
          <>
            <h2>{currentContent.title}</h2>
            <p>{currentContent.description}</p>

            {/* 검색 바 */}
            <div className="search-box">
              <img
                src="https://github.com/hnayoung/scb_image/blob/main/search_icon.png?raw=true"
                alt="검색"
                className="search-icon"
              />
              <input type="text" placeholder="질문 검색하기" />
            </div>

            {/* 필터 버튼 */}
            <div className="filters">
              <button className="filter-btn"></button>
              <button className="filter-btn"></button>
            </div>

            {/* 최신순 */}
            <div className="latest">
              <span>● 최신순</span>
            </div>
             
            {/* 질문 목록 */}
            <section className="questions">
              <QuestionForm category={category} questions={questions} />
            </section>
          </>
        ) : (
          <p>존재하지 않는 페이지입니다.</p>
        )}
      </main>

        {/* 모달 컴포넌트 */}
        <QuestionModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          category = {category}
          onSubmit={handleNewQuestion} // 새로운 질문을 추가할 수 있도록 수정
          />    
      </div>
      <Footer />
    </div>
  );
};

export default Community;
