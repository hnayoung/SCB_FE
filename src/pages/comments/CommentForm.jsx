import React, { useState } from 'react';
import { createComment } from '../services/comment';
import './CommentForm.scss'; // 스타일 파일 추가

const CommentForm = ({ onCommentCreated }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!text.trim()) {
      setError('댓글 내용을 입력해주세요.');
      return;
    }

    setLoading(true); // 댓글 작성 시작
    try {
      const newComment = await createComment({ text }); // API 호출
      onCommentCreated(newComment); // 새로운 댓글을 상위 컴포넌트에 전달
      setText(''); // 입력 필드 초기화
      setError(null); // 에러 초기화
    } catch (err) {
      setError('댓글 작성에 실패했습니다.');
    } finally {
      setLoading(false); // 댓글 작성 완료
    }
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      {error && <p className="error-message">{error}</p>}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="댓글을 입력하세요"
        rows="3"
        className="comment-input"
      />
      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? '작성 중...' : '댓글 작성'}
      </button>
    </form>
  );
};

export default CommentForm;
