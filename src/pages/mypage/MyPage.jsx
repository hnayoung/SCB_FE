import React, { useEffect, useState } from 'react';
import { fetchUserProfile, fetchUserProjects } from '../services/profile'; // API 함수 임포트
import './MyPage.scss';

const MyPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [projects, setProjects] = useState([]); // 프로젝트 상태 추가
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 사용자 프로필 조회
                const profileResponse = await fetchUserProfile('YOUR_USERNAME'); // username을 여기에 입력
                setUserInfo(profileResponse);

                // 사용자 프로젝트 조회
                const projectsResponse = await fetchUserProjects(profileResponse.username); // username을 기반으로 프로젝트 조회
                setProjects(projectsResponse);
            } catch (err) {
                console.error('프로필 정보를 불러오는 데 실패했습니다:', err);
                setError('프로필 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div className="loading">로딩 중...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="my-page">
            <h1>My Page</h1>
            <div className="profile-section">
                <div className="profile-pic">
                    <img src={userInfo.image || 'https://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/media/default.png'} alt={`${userInfo.username}'s profile`} />
                </div>
                <div className="user-info">
                    <p>{userInfo.nickname || userInfo.username}</p>
                    <p>{userInfo.range || 'N/A'}</p>
                    <input type="text" placeholder="github 아이디" defaultValue={userInfo.code || ''} />
                    <input type="email" placeholder="이메일 주소" defaultValue={userInfo.email || ''} />
                </div>
            </div>
            <div className="projects-section">
                <h2>My Projects</h2>
                <ul>
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <li key={project.id}> {/* 고유 키 prop 추가 */}
                                {project.name} <span>{project.visibility}</span>
                            </li>
                        ))
                    ) : (
                        <li>프로젝트가 없습니다.</li>
                    )}
                </ul>
            </div>
            <div className="review-section">
                <h2>My Review</h2>
                <textarea placeholder="리뷰를 작성하세요..." />
            </div>
        </div>
    );
};

export default MyPage;
