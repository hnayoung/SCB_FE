import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PostList from './PostList';
import Post from './Post';
import WritePost from './WritePost';
import './PostManager.scss'; // 스타일 파일 추가

const apiUrl = 'https://port-0-scb-be-m5p35c12a9749b96.sel4.cloudtype.app/';

const PostManager = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // 게시글 목록 가져오기
    const fetchPosts = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${apiUrl}api/board/boards/`);
            setPosts(response.data); // API에서 게시글 목록 받아오기
        } catch (error) {
            setError('게시글을 불러오는 데 실패했습니다.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts(); // 컴포넌트가 마운트되면 게시글 목록 가져오기
    }, []);

    // 새로운 포스트 생성
    const handlePostCreated = async (newPost) => {
        try {
            const response = await axios.post(`${apiUrl}api/board/boards/`, newPost);
            setPosts((prevPosts) => [...prevPosts, response.data]); // 새로운 포스트 추가
            navigate('/'); // 글쓰기 후 메인 페이지로 이동
        } catch (error) {
            setError('게시글 작성에 실패했습니다.');
            console.error(error);
        }
    };

    return (
        <div className="post-manager">
            <h1>게시글</h1>
            <button className="manager-button" onClick={() => navigate('/write')}>글쓰기</button>
            {loading && <div className="loading">로딩 중...</div>}
            {error && <div className="error">{error}</div>}
            <Routes>
                <Route path="/" element={<PostList posts={posts} />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/write" element={<WritePost onPostCreated={handlePostCreated} />} />
            </Routes>
        </div>
    );
};

export default PostManager;
