import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommunityDetail = ({ community }) => {
    const [activeTab, setActiveTab] = useState('공지사항'); // 기본 활성화된 탭

    const tabs = ['공지사항', '메시지', '스크랩', '책갈피']; // 탭 목록

    const handleTabClick = (tab) => {
        setActiveTab(tab); // 클릭한 탭으로 상태 업데이트
    };

    return (
        <div className="community-detail">
            <div className="tabs">
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
            <div className="content">
                {activeTab === '공지사항' && <p>여기에 {community}의 공지사항을 추가하세요.</p>}
                {activeTab === '메시지' && <p>여기에 {community}의 메시지를 추가하세요.</p>}
                {activeTab === '스크랩' && <p>여기에 {community}의 스크랩 내용을 추가하세요.</p>}
                {activeTab === '책갈피' && <p>여기에 {community}의 책갈피 내용을 추가하세요.</p>}
            </div>
        </div>
    );
};

// PropTypes 정의
CommunityDetail.propTypes = {
    community: PropTypes.string.isRequired,
};

export default CommunityDetail;
