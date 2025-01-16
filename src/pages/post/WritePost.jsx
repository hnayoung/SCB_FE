import React, { useState } from 'react';
import { createBoard } from '../services/board';
import './Post.scss';

const WritePost = ({ onPostCreated }) => {
    const [schoolId, setSchoolId] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // 로딩 상태 추가

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!schoolId || !title || !content) {
            setError('모든 필드를 입력해야 합니다.');
            return;
        }

        const newPost = {
            school_id: schoolId,
            title,
            content,
        };

        setLoading(true); // 로딩 시작

        try {
            const createdPost = await createBoard(newPost); // API 호출
            onPostCreated(createdPost); // 부모 컴포넌트에 데이터 전달
            setSchoolId('');
            setTitle('');
            setContent('');
            setError(null); // 에러 초기화
        } catch (err) {
            setError('게시글 작성 중 오류가 발생했습니다.');
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    return (
        <form className="write-post-container" onSubmit={handleSubmit}>
            {error && <p className="error-message">{error}</p>}
            <input
                type="text"
                className="write-input"
                placeholder="학번을 입력하세요"
                value={schoolId}
                onChange={(e) => setSchoolId(e.target.value)}
            />
            <input
                type="text"
                className="write-input"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="write-textarea"
                placeholder="내용을 추가하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" className="write-button" disabled={loading}>
                {loading ? '제출 중...' : '제출하기'}
            </button>
        </form>
    );
};

export default WritePost;
