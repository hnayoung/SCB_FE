import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainlayout.scss';

const Sidebar = ({ onSelectCommunity, handleHomeClick, handleCodeReviewClick }) => {
    const [showSubItems, setShowSubItems] = useState(false);

    const handleToggle = () => {
        setShowSubItems(!showSubItems); // 서브 메뉴의 열림/닫힘 상태 토글
    };

    const handleCommunitySelect = (community) => {
        onSelectCommunity(community); // 커뮤니티 선택 처리
        // 서브 메뉴를 닫지 않음
    };

    return (
        <div className="sidebar">
            <div className="profile">
                <span>👤</span> Profile
            </div>
            <div className="menu-item" onClick={handleHomeClick}>
                <span>🏠</span> Home
            </div>
            <div className="menu-item" onClick={handleToggle}>
                <span>💬</span> Communication
                <span className="dropdown" onClick={handleToggle}>
                    {showSubItems ? '▲' : '▼'}
                </span>
            </div>
            {showSubItems && (
                <div className="sub-menu">
                    <div className="sub-menu-item" onClick={() => handleCommunitySelect('질문방')}>
                        # 질문방
                    </div>
                    <div className="sub-menu-item" onClick={() => handleCommunitySelect('진로고민방')}>
                        # 진로고민방
                    </div>
                    <div className="sub-menu-item" onClick={() => handleCommunitySelect('수다방')}>
                        # 수다방
                    </div>
                    <div className="sub-menu-item" onClick={() => handleCommunitySelect('프로젝트모임방')}>
                        # 프로젝트모임방
                    </div>
                </div>
            )}
            <div className="menu-item" onClick={handleCodeReviewClick}>
                <span>📁</span> Code Review
            </div>
        </div>
    );
};

export default Sidebar;
