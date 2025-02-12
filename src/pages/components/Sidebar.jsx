import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainlayout.scss';

const Sidebar = ({ onSelectCommunity, handleHomeClick, handleCodeReviewClick }) => {
    const navigate = useNavigate();
    const [showSubItems, setShowSubItems] = useState(false);
    const [showProfileSubItems, setShowProfileSubItems] = useState(false); // 마이페이지 서브 메뉴 상태 추가

    const handleToggle = () => {
        setShowSubItems(!showSubItems); // 커뮤니케이션 서브 메뉴의 열림/닫힘 상태 토글
    };

    const handleProfileToggle = () => {
        setShowProfileSubItems(!showProfileSubItems); // 마이페이지 서브 메뉴의 열림/닫힘 상태 토글
    };

    const handleCommunitySelect = (community) => {
        onSelectCommunity(community); // 커뮤니티 선택 처리
    };

    const handleProfileClick = () => {
        navigate('/mypage'); // 마이페이지로 이동
    };

    return (
        <div className="sidebar">
            <div className="profile" onClick={handleProfileToggle}>
                <span>👤</span> Profile
                <span className="dropdown" onClick={handleProfileToggle}>
                    {showProfileSubItems ? '▲' : '▼'}
                </span>
            </div>
            {showProfileSubItems && (
                <div className="sub-menu">
                    <div className="sub-menu-item" onClick={handleProfileClick}>
                        마이페이지
                    </div>
                </div>
            )}
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
