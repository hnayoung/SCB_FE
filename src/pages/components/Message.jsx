import React, { useState } from 'react';
import './Message.scss'; // 스타일을 위해 CSS 파일을 추가합니다.

const Message = () => {
    const [comments, setComments] = useState([]); // 댓글 상태 관리
    const [newComment, setNewComment] = useState(''); // 새로운 댓글 입력 상태 관리
    const [userName, setUserName] = useState(''); // 사용자 이름 상태 관리

    const handleCommentChange = (e) => {
        setNewComment(e.target.value); // 댓글 입력 변경 시 상태 업데이트
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value); // 사용자 이름 변경 시 상태 업데이트
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 리로드 방지
        if (newComment.trim() && userName.trim()) {
            const currentDate = new Date().toLocaleString(); // 현재 날짜와 시간을 포맷
            setComments([...comments, { text: newComment, date: currentDate, name: userName }]); // 새로운 댓글 추가
            setNewComment(''); // 입력란 초기화
            setUserName(''); // 사용자 이름 초기화
        }
    };

    return (
        <div className="message">
            <h3 className="message-title">코드 관련해서 질문하는 곳입니다!</h3>

            <div className="message-comments-section">
                {comments.map((comment, index) => (
                    <div key={index} className="message-comment">
                        <div className="message-comment-header">
                            <span className="message-comment-name">{comment.name}</span>
                            <span className="message-comment-date">{comment.date}</span>
                        </div>
                        <div className="message-comment-body">
                            {comment.text}
                        </div>
                    </div>
                ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="message-comment-form">
                <input
                    type="text"
                    className="message-comment-name-input"
                    placeholder="이름을 입력하세요..."
                    value={userName}
                    onChange={handleNameChange}
                />
                <input
                    type="text"
                    className="message-comment-input"
                    placeholder="댓글 남기기..."
                    value={newComment}
                    onChange={handleCommentChange}
                />
                <button type="submit" className="message-comment-submit">전송</button>
            </form>
        </div>
    );
};

export default Message;
