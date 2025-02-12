import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBoardList } from '../services/board';
import './PostList.scss';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchBoardList();
        setPosts(data);
      } catch (err) {
        setError('게시판 목록을 불러오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <div className="loading">로딩 중...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="content">
      <div className="title-wrap">
        <div className="left">
          <h2>게시판 목록</h2>
        </div>
      </div>
      <ul className="list-wrapper">
        {posts.length === 0 ? (
          <li className="empty">게시물이 없습니다.</li>
        ) : (
          posts.map((post) => (
            <li className="list" key={post.id}>
              <Link to={`/post/${post.id}`} className="image-wrapper">
                <img src={post.image_url} alt={post.title} className="post-image" />
              </Link>
              <div className="font-wrapper">
                <strong className="post-title">{post.title}</strong>
                <p className="post-author">작성자: {post.created_by_username}</p>
                <p className="post-date">작성일: {new Date(post.date_created).toLocaleDateString()}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PostList;
