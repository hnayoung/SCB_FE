import React, { useState } from 'react';
import Navbar from './Navbar';
import CodeReview from '../codeReview/CodeReview'; 
import PostList from '../post/PostList'; 

const MainLayout = () => {
    const [currentPage, setCurrentPage] = useState('postList'); // 초기 페이지 설정

    // 코드 리뷰 페이지로 전환하는 핸들러
    const handleCodeReviewClick = () => {
        setCurrentPage('codeReview');
    };

    return (
        <div className="main-layout">
            <div className="main-content">
                <Navbar />
                {currentPage === 'postList' ? (
                    <PostList />
                ) : currentPage === 'codeReview' ? (
                    <CodeReview /> // 코드 리뷰 페이지로 전환
                ) : (
                    <PostList /> // 기본 페이지
                )}
            </div>
        </div>
    );
};

export default MainLayout;