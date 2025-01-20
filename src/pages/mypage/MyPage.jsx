import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyPage.scss';

const MyPage = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('https://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/users/profile/');
                setUserInfo(response.data);
            } catch (err) {
                setError('프로필 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) return <div className="loading">로딩 중...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="my-page">
            <h1>My Page</h1>
            <div className="profile-section">
                <div className="profile-pic">
                    <span>{userInfo.username}</span> {/* Placeholder for image */}
                </div>
                <div className="user-info">
                    <p>{userInfo.student_id}/{userInfo.department}/{userInfo.name}</p>
                    <input type="text" placeholder="github 아이디" defaultValue={userInfo.github} />
                    <input type="email" placeholder="이메일 주소" defaultValue={userInfo.email} />
                    <input type="text" placeholder="분야" defaultValue={userInfo.field} />
                </div>
            </div>
            <div className="projects-section">
                <h2>My Project</h2>
                <ul>
                    {userInfo.projects.map((project) => (
                        <li key={project.id}>
                            {project.name} <span>{project.visibility}</span>
                        </li>
                    ))}
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
