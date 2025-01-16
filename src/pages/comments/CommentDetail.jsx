import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentById } from '../services/comment';
import './CommentDetail.scss'; // 스타일 파일 추가

const CommentDetail = () => {
  const { id } = useParams(); // URL에서 댓글 ID를 가져옴
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadComment = async () => {
      try {
        const data = await fetchCommentById(id); // API 호출
        setComment(data);
      } catch (err) {
        setError('댓글 정보를 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadComment();
  }, [id]);

  if (loading) return <div className="loading">로딩 중...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="comment-detail">
      <h2>댓글 상세 정보</h2>
      <p><strong>내용:</strong> {comment.text}</p>
      <p><strong>작성자:</strong> {comment.author_username}</p>
      <p><strong>작성일:</strong> {new Date(comment.created_at).toLocaleDateString()}</p>
    </div>
  );
};

export default CommentDetail;
