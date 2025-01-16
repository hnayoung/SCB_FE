import React from "react";
import { useParams } from "react-router-dom";
import Communication from "./Communication"; // Communication 컴포넌트 가져오기
import PropTypes from 'prop-types'; // PropTypes 가져오기

const Community = () => {
  const { communityName } = useParams(); // URL 파라미터에서 커뮤니티 이름 가져오기

  if (!communityName) {
    return <h2>커뮤니티 이름이 없습니다. 올바른 URL을 입력해 주세요.</h2>; // 에러 처리
  }

  return (
    <div className="community-page">
      <h2 className="community-title">{communityName} 페이지</h2>
      <Communication community={communityName} /> {/* 커뮤니티 이름을 Communication에 전달 */}
    </div>
  );
};

// PropTypes 정의
Community.propTypes = {
  communityName: PropTypes.string,
};

export default Community;
