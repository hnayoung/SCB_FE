import React from 'react'
import { Link } from "react-router-dom";
import "./QuestionForm.scss";

const QuestionForm = ({ category, questions }) => {

  return (
    <div className="question-form">
      <ul>
        {questions.map((question) => (
            <li key={question.id} className="question-item">
              {category && question.id ? (
                <Link to={`/community/${category}/${question.id}`} className="question-link">
                  {/* 제목 */}
                  <div className='question-title'>{question.title}</div>
                  {/* 질문내용 */}
                  <div className='question-content'>{question.content}</div>
                  {/* [학년/학기] 수업이름 > 주차 */}
                  <div className="question-meta-category">[{question.selectedGrade}/{question.selectedSemester}]&nbsp;{question.selectedCourse}&nbsp;&gt;&nbsp;주차</div>
                  {/* 프로필 사진, 이름, 시간 */}
                  <div className='question-author'>
                    <div className="author-avatar">사진</div>
                    <div className="author-name">김*림</div>
                  </div>
                  {/* 사진 */}
                  <div className="question-image">
                    {/* 질문에 첨부된 이미지가 있다면 표시 */}
                    {question.imageUrl ? (
                      <img src={question.imageUrl} alt="질문 이미지" />
                    ) : (
                      <div className="image-placeholder">?</div> // 파란색 박스 (이미지 자리)
                    )}
                  </div>
                  {/*댓글, 추천, 조회수 */}
                  <div className="question-stats">
                  <span className="stats-comments">댓글 {question.comments || 0}</span>
                  <span className="stats-likes">・ 추천 {question.likes || 0}</span>
                  <span className="stats-views">・ 조회수 {question.views || 1}</span>
                </div>
                </Link>
              ) : (
                <span>{question.title}</span>
              )}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default QuestionForm


// 질문 등록하면 화면에 보이는 거 
// 1. 학습 질문 -> 학습 질문 폼 최신순 업로드
// 2. 학과 질문 -> 학과 질문 폼 최신순 업로드 
// 3. 소통해요 -> 소통해요 폼 최신순 업로드 
// 4. 폼 클릭 -> 해당 질문 페이지로 이동(url 변경 ex) major/1, study/1, talk/1)

