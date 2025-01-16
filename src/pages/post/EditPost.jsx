import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBoardDetails, updateBoard } from '../api/api';
import './EditPost.scss'; // 스타일 파일 추가

const EditPost = () => {
    const { id } = useParams(); // URL에서 게시글 ID 가져옴
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: '',
        content: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPostDetails = async () => {
            try {
                const data = await fetchBoardDetails(id); // API 호출
                setPost({
                    title: data.title || '', // 기본 값 설정
                    content: data.content || '' // 기본 값 설정
                });
            } catch (err) {
                setError('게시글 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        getPostDetails();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!post.title || !post.content) {
            setError('제목과 내용을 모두 입력해주세요.');
            return;
        }
        try {
            await updateBoard(id, {
                title: post.title,
                content: post.content
            }); // API 호출
            navigate(`/post/${id}`); // 수정 후 상세 페이지로 이동
        } catch (err) {
            setError('게시글 수정에 실패했습니다.');
        }
    };

    if (loading) return <div className="loading">로딩 중...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="edit-post">
            <h1>게시글 수정</h1>
            <form onSubmit={handleSubmit} className="edit-post-form">
                <div>
                    <label>제목</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleInputChange}
                        placeholder="제목을 입력하세요"
                        className="input-field"
                    />
                </div>
                <div>
                    <label>내용</label>
                    <textarea
                        name="content"
                        value={post.content}
                        onChange={handleInputChange}
                        placeholder="내용을 입력하세요"
                        className="textarea-field"
                    />
                </div>
                <button type="submit" className="submit-button">수정 완료</button>
            </form>
        </div>
    );
};

export default EditPost;
