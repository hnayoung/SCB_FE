import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBoardDetails } from '../api/api';
import './Post.scss'; // 스타일 파일 추가

const Post = () => {
    const { id } = useParams(); // URL에서 게시글 ID를 가져옴
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPostDetails = async () => {
            try {
                const data = await fetchBoardDetails(id); // API 호출
                setPost(data); // 게시글 데이터 저장
            } catch (err) {
                setError('게시글 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        getPostDetails();
    }, [id]);

    if (loading) return <div className="loading">로딩 중...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>학번: {post.school_id}</p>
            <p>작성자: {post.created_by_username}</p>
            <p>작성일: {new Date(post.date_created).toLocaleDateString()}</p>
            <p>수정일: {new Date(post.date_updated).toLocaleDateString()}</p>
            <div className="post-content">{post.content}</div>

            <div className="post-actions">
                <Link to={`/edit/${id}`}>
                    <button className="edit-button">수정</button>
                </Link>
                {/* 삭제 버튼은 논의 후 추가 가능 */}
            </div>

            <h2>댓글</h2>
            {post.comments && post.comments.length > 0 ? (
                <ul className="comment-list">
                    {post.comments.map((comment) => (
                        <li key={comment.id} className="comment-item">
                            <p>{comment.text}</p>
                            <p>작성자: {comment.author_username}</p>
                            <p>작성일: {new Date(comment.created_at).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>댓글이 없습니다.</p>
            )}
        </div>
    );
};

export default Post;
