import React, { useState } from 'react';
import { createProject } from '../services/projects';
import './CreateProjectForm.scss'; // 스타일 파일 추가

const CreateProjectForm = () => {
    const [teamName, setTeamName] = useState('');
    const [teamMembers, setTeamMembers] = useState(['']); // 팀원을 배열로 초기화
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false); // 로딩 상태 추가

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // 로딩 시작

        const projectData = {
            team_name: teamName,
            team_members: teamMembers,
            description: description,
        };

        try {
            await createProject(projectData);
            setSuccessMessage('프로젝트가 성공적으로 생성되었습니다!');
            setErrorMessage('');
            setTeamName('');
            setTeamMembers(['']); // 초기화
            setDescription('');
        } catch (err) {
            console.error('프로젝트 생성 실패:', err);
            setErrorMessage('프로젝트 생성에 실패했습니다.');
        } finally {
            setLoading(false); // 로딩 종료
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

    return (
        <div className="create-project-form">
            <h2>새 프로젝트 생성</h2>
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
                <button type="submit" disabled={loading}>
                    {loading ? '생성 중...' : '프로젝트 생성'}
                </button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default CreateProjectForm;
