import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBoard } from '../api/api';
import './DeletePost.scss'; // 스타일 파일 추가

const DeletePost = ({ boardId }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (isDeleting) return; // 중복 클릭 방지

        const confirmDelete = window.confirm('정말로 이 게시판을 삭제하시겠습니까?');
        if (!confirmDelete) return; // 사용자 확인

        setIsDeleting(true);
        setError(null);

        try {
            const status = await deleteBoard(boardId); // API 호출

            if (status === 204) {
                alert('게시판이 삭제되었습니다.');
                navigate('/'); // 삭제 후 메인 화면으로 리다이렉트
            } else if (status === 403) {
                setError('삭제 권한이 없습니다.');
            } else if (status === 404) {
                setError('게시판을 찾을 수 없습니다.');
            } else {
                setError('삭제 중 오류가 발생했습니다.');
            }
        } catch (err) {
            setError('네트워크 오류가 발생했습니다.');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="delete-post">
            <h2>게시판 삭제</h2>
            <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="delete-button"
            >
                {isDeleting ? '삭제 중...' : '게시판 삭제'}
            </button>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default DeletePost;
