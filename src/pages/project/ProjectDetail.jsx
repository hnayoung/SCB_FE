import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectDetails } from '../services/projects';
import './ProjectDetail.scss'; // 스타일 파일 추가

const ProjectDetail = () => {
    const { id } = useParams(); // URL에서 ID를 가져옴
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProjectDetails = async () => {
            try {
                const data = await fetchProjectDetails(id);
                setProject(data);
            } catch (err) {
                console.error('프로젝트 세부 정보 불러오기 실패:', err);
                setError('프로젝트 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        loadProjectDetails();
    }, [id]);

    if (loading) return <div className="loading">로딩 중...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="project-detail">
            <h1>프로젝트 세부 정보</h1>
            {project ? (
                <div>
                    <h2>팀 이름: {project.team_name}</h2>
                    <h3>팀원:</h3>
                    <ul>
                        {project.team_members.map((member, index) => (
                            <li key={index}>{member}</li>
                        ))}
                    </ul>
                    <p>설명: {project.description}</p>
                    <p>점수: {project.score}</p>
                    <p>최상위 디렉터리: {project.top_level_directory}</p>
                    <p>파일 크기: {project.file_size}KB</p>
                    {project.zip_file && (
                        <p>
                            <a href={project.zip_file} target="_blank" rel="noopener noreferrer">
                                프로젝트 파일 다운로드
                            </a>
                        </p>
                    )}
                </div>
            ) : (
                <p>프로젝트 정보를 찾을 수 없습니다.</p>
            )}
        </div>
    );
};

export default ProjectDetail;
