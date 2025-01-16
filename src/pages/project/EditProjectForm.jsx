import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProjectDetails, updateProject } from '../services/projects';
import './EditProjectForm.scss'; // 스타일 파일 추가

const EditProjectForm = () => {
    const { id } = useParams(); // URL에서 프로젝트 ID 가져오기
    const navigate = useNavigate();
    const [teamName, setTeamName] = useState('');
    const [teamMembers, setTeamMembers] = useState(['']); // 팀원을 배열로 초기화
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        const loadProjectDetails = async () => {
            try {
                const project = await fetchProjectDetails(id);
                setTeamName(project.team_name);
                setTeamMembers(project.team_members);
                setDescription(project.description);
            } catch (err) {
                console.error('프로젝트 정보를 불러오는 중 오류 발생:', err);
                setErrorMessage('프로젝트 정보를 불러오는 데 실패했습니다.');
            } finally {
                setLoading(false); // 로딩 종료
            }
        };

        loadProjectDetails();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {
            team_name: teamName,
            team_members: teamMembers,
            description: description,
        };

        try {
            await updateProject(id, updatedData);
            alert('프로젝트가 성공적으로 수정되었습니다.');
            navigate(`/projects/${id}`);
        } catch (err) {
            console.error('프로젝트 수정 실패:', err);
            setErrorMessage('프로젝트를 수정하는 데 실패했습니다.');
        }
    };

    const handleTeamMemberChange = (index, value) => {
        const updatedMembers = [...teamMembers];
        updatedMembers[index] = value;
        setTeamMembers(updatedMembers);
    };

    const addTeamMember = () => {
        setTeamMembers([...teamMembers, '']); // 빈 문자열 추가
    };

    const removeTeamMember = (index) => {
        const updatedMembers = teamMembers.filter((_, i) => i !== index);
        setTeamMembers(updatedMembers);
    };

    if (loading) return <div>로딩 중...</div>; // 로딩 중 메시지

    return (
        <div className="edit-project-form">
            <h2>프로젝트 수정</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="teamName">팀 이름:</label>
                    <input
                        type="text"
                        id="teamName"
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="teamMembers">팀원:</label>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member-input">
                            <input
                                type="text"
                                value={member}
                                onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                                required
                            />
                            <button type="button" onClick={() => removeTeamMember(index)}>삭제</button>
                        </div>
                    ))}
                    <button type="button" onClick={addTeamMember}>팀원 추가</button>
                </div>
                <div>
                    <label htmlFor="description">설명:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">수정 완료</button>
            </form>
        </div>
    );
};

export default EditProjectForm;
