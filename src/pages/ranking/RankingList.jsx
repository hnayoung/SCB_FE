import React from 'react';
import RankingItem from './RankingItem';
import './RankingStyle.scss';

const RankingList = () => {
  const rankings = [
    { id: 1, name: "홍길동", score: 98 },
    { id: 2, name: "김철수", score: 95 },
    { id: 3, name: "박영희", score: 93 },
    { id: 4, name: "이민수", score: 90 },
    { id: 5, name: "최지훈", score: 88 },
  ];

  // score를 기준으로 내림차순 정렬
  rankings.sort((a, b) => b.score - a.score);

  return (
    <div className="ranking-container">
      <h2 className="ranking-name">랭킹</h2>
      <ul className="ranking-list">
        {rankings.map((ranking, index) => (
          <RankingItem 
            key={ranking.id} 
            rank={index + 1} 
            name={ranking.name} 
            score={ranking.score} 
          />
        ))}
      </ul>
    </div>
  );
};

export default RankingList;
