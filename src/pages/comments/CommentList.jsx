import React, { useState, useEffect } from 'react';
import { fetchAllComments, updateComment, deleteComment } from '../services/comment';
import CommentForm from './comments/CommentForm';
import './CommentList.scss'; // 스타일 파일 추가

const CommentList = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editingText, setEditingText] = useState('');

    useEffect(() => {
        const loadComments = async () => {
            try {
                const data = await fetchAllComments();
                setComments(data);
            } catch (err) {
                setError('댓글 목록을 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        loadComments();
    }, []);

    const handleCommentCreated = (newComment) => {
        setComments((prevComments) => [newComment, ...prevComments]);
    };

    const handleEditClick = (comment) => {
        setEditingCommentId(comment.id);
        setEditingText(comment.text);
    };

    const handleCancelEdit = () => {
        setEditingCommentId(null);
        setEditingText('');
    };

    const handleUpdateComment = async (e) => {
        e.preventDefault();
        if (!editingText.trim()) {
            alert('댓글 내용을 입력해주세요.');
            return;
        }

        try {
            const updatedComment = await updateComment(editingCommentId, { text: editingText });
            setComments((prevComments) =>
                prevComments.map((comment) =>
                    comment.id === editingCommentId ? updatedComment : comment
                )
            );
            handleCancelEdit();
        } catch (err) {
            alert('댓글 수정에 실패했습니다.');
        }
    };

    const handleDeleteComment = async (id) => {
        if (!window.confirm('이 댓글을 삭제하시겠습니까?')) return;

        try {
            const status = await deleteComment(id);
            if (status === 204) {
                setComments((prevComments) => prevComments.filter((comment) => comment.id !== id));
                alert('댓글이 삭제되었습니다.');
            } else {
                alert('댓글 삭제 권한이 없거나 이미 삭제된 댓글입니다.');
            }
        } catch (err) {
            alert('댓글 삭제에 실패했습니다.');
        }
    };

    if (loading) return <div className="loading">댓글 로딩 중...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="comment-list">
            <h3>댓글</h3>
            <CommentForm onCommentCreated={handleCommentCreated} />
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id} className="comment-item">
                            {editingCommentId === comment.id ? (
                                <form onSubmit={handleUpdateComment} className="edit-form">
                                    <textarea
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        rows="3"
                                        className="edit-textarea"
                                    />
                                    <button type="submit" className="submit-button">수정 완료</button>
                                    <button type="button" className="cancel-button" onClick={handleCancelEdit}>취소</button>
                                </form>
                            ) : (
                                <>
                                    <p className="comment-text">{comment.text}</p>
                                    <p className="comment-author">작성자: {comment.author_username}</p>
                                    <p className="comment-date">작성일: {new Date(comment.created_at).toLocaleDateString()}</p>
                                    <button className="edit-button" onClick={() => handleEditClick(comment)}>수정</button>
                                    <button className="delete-button" onClick={() => handleDeleteComment(comment.id)}>삭제</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>댓글이 없습니다.</p>
            )}
        </div>
    );
};

export default CommentList;
