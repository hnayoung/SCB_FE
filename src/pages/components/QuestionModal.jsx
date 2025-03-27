import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Community from "./Community";
import "./QuestionModal.scss";

const QuestionModal = ({ isOpen, onClose, category, onSubmit }) => {
  
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(""); // ✅ 사용자가 선택한 수업 저장
  const [selectedGrade, setSelectedGrade] = useState(""); // 학년 선택 상태
  const [selectedSemester, setSelectedSemester] = useState(""); // 학기 선택 상태
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 


  // 학년과 학기에 따른 수업 목록
  const courseOptions = {
    "1학년": {
      "1학기": ["A", "B"],
      "2학기": ["C", "D"],
    },
    "2학년": {
      "1학기": ["E", "F"],
      "2학기": ["G", "H"],
    }, 
    "3학년": {
      "1학기": ["I", "J"],
      "2학기": ["K", "L"],
    },
    "4학년": {
      "1학기": ["M", "N"],
      "2학기": ["O", "P"],
    },
  };

  // 학년이 선택되었는지 확인하고, 학기에 따라 수업 목록 설정
  const availableCourses =
    selectedGrade && selectedSemester
      ? courseOptions[selectedGrade]?.[selectedSemester] || []
      : [];

   // 등록하기 버튼 클릭 시 실행
   const handleSubmit = async () => {
    if (!title || !content) return;

    const newQuestion = {
      id: Date.now(),
      title,
      content,
      category, // 현재 카테고리 (study, major, talk)
      selectedGrade,
      selectedSemester,
      selectedCourse
    };

    onClose(); // 모달 닫기
    navigate(`/community/${category}`);
    onSubmit(newQuestion); // Community.jsx로 전달

    // 해당 질문 페이지로 이동 (/category/questionId)
    
  };
    
    /*
    try {
      const response = await fetch("http://localhost:8080/question", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuestion),
      });

      if (response.ok) {
        const savedQuestion = await response.json();
        onSubmit(savedQuestion); // 질문 목록에 추가
        onClose(); // 모달 닫기
      } else {
        console.error("질문 저장 실패");
      }
    } catch (error) {
      console.error("서버 오류:", error);
    }
  };
 */

  return isOpen ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>질문 작성하기</h2>
        <div className="guide-box">
          <p>❓ 좋은 질문이 좋은 답변을 만들어줘요!</p>
          <ul>
            <li>가능한 한 자세히 작성할수록 빠른 해결이 가능해요.</li>
            <li>제목은 한눈에 문제를 파악할 수 있게 구체적으로 작성해 주세요.</li>
            <li>상대방을 배려한 정중한 표현을 사용해 주세요.</li>
          </ul>
        </div>

         {/* "소통해요"일 때 드롭다운 제거 */}
         {category !== "talk" && (
          <div className="dropdowns">
            {/* 학년 선택 */}
            <select value={selectedGrade}
             onChange={(e) => setSelectedGrade(e.target.value)}>
              <option value="">학년 선택</option>
              <option value="1학년">1학년</option>
              <option value="2학년">2학년</option>
              <option value="3학년">3학년</option>
              <option value="4학년">4학년</option>
            </select>

            {/* 학기 선택 */}
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              disabled={!selectedGrade} // 학년이 선택되지 않으면 비활성화
            >
              <option value="">학기 선택</option>
              <option value="1학기">1학기</option>
              <option value="2학기">2학기</option>
            </select>

            {/* ✅ 수업 선택 (유저가 직접 선택 가능) */}
            <select 
              value={selectedCourse} 
              onChange={(e) => setSelectedCourse(e.target.value)} 
              disabled={!selectedGrade || !selectedSemester}
            >
              <option value="">수업 선택</option>
              {availableCourses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>

            <select>
              <option value="">태그 선택</option>
              <option value="error">오류</option>
              <option value="etc">기타</option>
            </select>
          </div>
        )}

        {/* 제목 입력 */}
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* 질문 내용 입력 */}
        <textarea
          placeholder="질문 내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {/* 아이콘 버튼 */}
        <div className="toolbar">
          <button>
            <img src="https://github.com/hnayoung/scb_image/blob/main/keyboard_code.png?raw=true"></img>
          </button>
          <button className="icon2">
            <img src="https://github.com/hnayoung/scb_image/blob/main/keyboard_gallery.png?raw=true"></img>
          </button>
          <button>
          <img src="https://github.com/hnayoung/scb_image/blob/main/keyboard_file.png?raw=true"></img>
          </button>
        </div>

        {/* 하단 버튼 */}
        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>
            취소
          </button>
          <button className={`submit-btn ${title && content ? "active" : ""}`} onClick={handleSubmit}>
            등록하기
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default QuestionModal;
