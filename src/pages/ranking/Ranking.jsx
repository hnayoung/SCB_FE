import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Ranking.scss";

const shareIcon = "https://github.com/hnayoung/scb_image/blob/main/share.png?raw=true"; // 공유 아이콘
const heartIcon = "❤️";
const emptyHeartIcon = "🤍";

const Ranking = () => {
  const [rankings, setRankings] = useState([
    {
      id: 1,
      profileImg: "https://github.com/hnayoung/scb_image/blob/main/image%2015.png?raw=true",
      title: "제목",
      category: "# 백엔드",
      score: "AI 점수",
      liked: false,
      // shareLink: "https://your-share-link.com/1", // 외부 공유 링크(api사용해야됨)
    },
    {
      id: 2,
      profileImg: "https://github.com/hnayoung/scb_image/blob/main/image%2015.png?raw=true",
      title: "제목",
      category: "# 프론트",
      score: "AI 점수",
      liked: true,
      // shareLink: "https://your-share-link.com/2", // 외부 공유 링크
    },
  ]);

  // 좋아요 버튼 토글
  const toggleLike = (id) => {
    setRankings(
      rankings.map((item) =>
        item.id === id ? { ...item, liked: !item.liked } : item
      )
    );
  };

  return (
    <div className="ranking-container">
      <Navbar />
      <h2 className="ranking-title">랭킹 순위!</h2>
      <hr />
      <div className="ranking-list">
        {rankings.map((item, index) => (
          <div key={item.id} className="ranking-item">
            <div className="ranking-info">
              <span className="rank-number">{index + 1}.</span>
              <img src={item.profileImg} alt="프로필" className="profile-img" />
              <span className="user-name">{item.user}</span>
              <span className="title">{item.title}</span>
              <span className="category">{item.category}</span>
              <span className="score">{item.score}</span>
            </div>
            <div className="actions">
              {/* 공유 버튼 */}
              <a href={item.shareLink} target="_blank" rel="noopener noreferrer" className="share-btn">
                <img src={shareIcon} alt="공유" className="share-icon" />
              </a>

              {/* 좋아요 버튼 */}
              <button className="like-btn" onClick={() => toggleLike(item.id)}>
                {item.liked ? heartIcon : emptyHeartIcon}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
