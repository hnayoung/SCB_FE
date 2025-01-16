import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectDetails } from '../services/projects'; 
import DeleteProjectButton from './DeleteProjectButton';

const ProjectsList = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjectDetails = async () => {
            try {
                const data = await fetchProjectDetails(id);
                setProject(data);
            } catch (err) {
                console.error('프로젝트 정보를 불러오는 중 오류 발생:', err);
                setError('프로젝트 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        loadProjectDetails();
    }, [id]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="project-detail">
            <h1>프로젝트 세부 정보</h1>
            {project ? (
                <div>
                    <h2>팀 이름: {project.team_name}</h2>
                    <p>팀원: {project.team_members}</p>
                    <p>설명: {project.description}</p>
                    <DeleteProjectButton projectId={id} />
                </div>
            ) : (
                <p>프로젝트 정보를 찾을 수 없습니다.</p>
            )}
        </div>
    );
};

export default ProjectsList;
