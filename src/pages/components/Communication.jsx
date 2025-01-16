import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Mainlayout.scss'; // 스타일 파일 가져오기
import Message from './Message'; 
import CommunityDetail from './CommunityDetail'; 

const Communication = ({ community }) => {
    const [activeTab, setActiveTab] = useState('공지사항'); // 기본 활성화된 탭
    const tabs = ['공지사항', '메시지', '스크랩', '책갈피']; // 탭 목록

    const handleTabClick = (tab) => {
        setActiveTab(tab); // 클릭한 탭으로 상태 업데이트
    };

    return (
        <div className="communication">
            <h2 className="communication-h2">
                Community {'>'} #{community} {'>'} {activeTab}
            </h2>
            <div className="communication-tabs">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={activeTab === tab ? 'active' : ''}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="communication-content">
                {activeTab === '메시지' ? (
                    <Message /> // 메시지 탭이 활성화되면 Message 컴포넌트 표시
                ) : (
                    <CommunityDetail community={community} /> // 커뮤니티 세부 정보를 표시
                )}
            </div>
        </div>
    );
};

// PropTypes 정의
Communication.propTypes = {
    community: PropTypes.string.isRequired,
};

export default Communication;
