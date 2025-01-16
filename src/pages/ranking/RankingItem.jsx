import React from 'react';
import PropTypes from 'prop-types';
import './RankingItem.scss'; // 스타일 파일 추가

const RankingItem = ({ rank, name, score }) => {
  return (
    <li className="ranking-item">
      {rank}. {name} - {score}점
    </li>
  );
};

// PropTypes 정의
RankingItem.propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

// 기본값 설정
RankingItem.defaultProps = {
  rank: 0,
  name: 'Unknown',
  score: 0,
};

export default RankingItem;
