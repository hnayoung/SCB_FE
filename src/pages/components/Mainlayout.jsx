import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Communication from './Communication'; 
import CodeReview from '../codeReview/CodeReview'; 
import PostList from '../post/PostList'; 
import './Mainlayout.scss';

const MainLayout = () => {
    const [selectedCommunity, setSelectedCommunity] = useState(null);
    const [currentPage, setCurrentPage] = useState('postList'); // 초기 페이지 설정

    const handleSelectCommunity = (community) => {
        setSelectedCommunity(community);
        setCurrentPage('communication'); // 선택된 커뮤니티에 대한 페이지로 전환
    };
    
    const handleHomeClick = () => {
        setSelectedCommunity(null);
        setCurrentPage('postList'); // 홈 클릭 시 PostList로 전환
    };

    const handleCodeReviewClick = () => {
        setCurrentPage('codeReview'); // 코드 리뷰 클릭 시 페이지 전환
    };

    return (
        <div className="main-layout">
            <Sidebar 
                onSelectCommunity={handleSelectCommunity} 
                handleHomeClick={handleHomeClick} 
                handleCodeReviewClick={handleCodeReviewClick} // 코드 리뷰 클릭 핸들러 추가
            />
            <div className="main-content">
                <Navbar />
                {currentPage === 'postList' ? (
                    <PostList />
                ) : currentPage === 'codeReview' ? (
                    <CodeReview /> // 코드 리뷰 페이지로 전환
                ) : selectedCommunity ? (
                    <Communication community={selectedCommunity} /> // 선택된 커뮤니티에 대한 Communication
                ) : (
                    <PostList />
                )}
            </div>
        </div>
    );
};

export default MainLayout;
