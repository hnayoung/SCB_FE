import React from 'react';
import Navbar from '../components/Navbar';
import './Board.scss';

const Board = () => {
  return (
    <div className="board">
      {/* Navbar 고정 */}
      <Navbar />

      {/* 실제 콘텐츠 */}
      <div className="board-content">
        <div className="title-wrapper">
          <div className="subtitle-wrapper">
            <h2>프로젝트 게시판</h2>
          </div>
        </div>

        <div className="content-wrapper">
          <a href="#">
            <img
              src="https://cdn3.wadiz.kr/studio/images/2024/07/29/4e825eaf-86f6-4a13-bf1c-856e9cbe29aa.jpeg/wadiz/resize/400/format/jpg/quality/85/"
              alt="하루10분"
            />
            <div className="funding">
              <span className="content-span">프론트</span>
            </div>
            <div className="card01">
              <p className="percent">21,914% 달성</p>
              <strong>
                하루10분 주식 기법으로 초보 직장인 [월4천수익 냈던 트레이딩 강의]
              </strong>
            </div>
          </a>

          <a href="#">
            <img
              src="https://cdn3.wadiz.kr/studio/images/2024/07/15/e87c4ab7-eac9-4404-8c43-5690a5d237b6.jpeg/wadiz/resize/400/format/jpg/quality/85/"
              alt="텀블러"
            />
            <div className="funding">
              <span className="content-span">백엔드</span>
            </div>
            <div className="card02">
              <p className="percent">14,383% 달성</p>
              <strong>
                [한일] 이건 그냥 혁신, 텀블러가 100도로 팔팔! 보온부터 가열까지
              </strong>
            </div>
          </a>

          <a href="#">
            <img
              src="https://cdn3.wadiz.kr/studio/images/2024/07/29/862facc1-764f-4ea1-b13e-f7a231e2a86a.jpeg/wadiz/resize/400/format/jpg/quality/85/"
              alt="영어"
            />
            <div className="purchase">
              <span className="content-span">프론트</span>
            </div>
            <div className="card03">
              <p className="percent">44,142% 달성</p>
              <strong>
                [누적40억 |앵콜] 영어1위 지나쌤의 매직패턴 전자책&amp;버터발음 패키지
              </strong>
            </div>
          </a>

          <a href="#">
            <img
              src="https://cdn3.wadiz.kr/studio/images/2024/07/03/d0ebedeb-99a8-4ca0-b428-8c1e79c83e58.jpeg/wadiz/resize/400/format/jpg/quality/85/"
              alt="보조배터리"
            />
            <div className="purchase">
              <span className="content-span">프론트</span>
            </div>
            <div className="card04">
              <p className="percent">5,083% 달성</p>
              <strong>[와디즈 첫 공개] 모맥스 3in1 보조배터리 1-Power mini</strong>
            </div>
          </a>

          <a href="#">
            <img
              src="https://cdn3.wadiz.kr/studio/images/2024/07/29/4d83c001-0354-4e2b-8de1-3648c4720e04.jpeg/wadiz/resize/400/format/jpg/quality/85/"
              alt="마즈마즈게임"
            />
            <div className="purchase">
              <span className="content-span">백엔드</span>
            </div>
            <div className="card05">
              <p className="percent">2,317% 달성</p>
              <strong>
                탁, 붙는 손맛이 짜릿짜릿! 신개념 자석을 이용한 배팅 게임 &lt;마즈마즈&gt;
              </strong>
            </div>
          </a>

          <a href="#">
            <img
              src="https://cdn3.wadiz.kr/studio/images/2024/07/29/d516d8fb-c59f-4ae9-bc9f-2c18c9793205.jpeg/wadiz/resize/400/format/jpg/quality/85/"
              alt="가방"
            />
            <div className="car-wrapper">
              <div className="purchase">
                <span className="content-span">AI</span>
              </div>
              <div className="card06">
                <p className="percent">2,851% 달성</p>
                <strong>
                  TOV | 더나은 스타일과 데일리를 위해, 보부상을 위한 세련된 가방
                </strong>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Board;
