import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProject } from '../services/projects';
import './DeleteProjectButton.scss'; // 스타일 파일 추가

const DeleteProjectButton = ({ projectId }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // 로딩 상태 추가

    const handleDelete = async () => {
        const confirmDelete = window.confirm('정말 이 프로젝트를 삭제하시겠습니까?');
        if (!confirmDelete) return;

        setLoading(true); // 로딩 시작

        try {
            await deleteProject(projectId);
            alert('프로젝트가 성공적으로 삭제되었습니다.');
            navigate('/'); // 삭제 후 메인 페이지로 이동
        } catch (err) {
            console.error('프로젝트 삭제 실패:', err);
            alert('프로젝트를 삭제하는 데 실패했습니다.');
        } finally {
            setLoading(false); // 로딩 종료
        }
    };

    return (
        <button onClick={handleDelete} className="delete-button" disabled={loading}>
            {loading ? '삭제 중...' : '삭제'}
        </button>
    );
};

export default DeleteProjectButton;
