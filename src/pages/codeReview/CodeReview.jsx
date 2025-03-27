import React from 'react';
import './CodeReview.scss';

const CodeReview = () => {
    return (
        <div className="code-review-container">
            <header className="header">
                <p></p>
                <p></p>
                <h1>코드를 작성해 주세요!</h1>
            </header>
            <div className="content">
                <textarea className="code-input" placeholder="코드를 입력하세요..." />
                <div className="tag-buttons">
                    <button className="tag-button"># 프런트</button>
                    <button className="tag-button"># 백엔드</button>
                    <button className="tag-button"># 고수</button>
                    <button className="tag-button"># 초보</button>
                    <button className="tag-button">태그 추가</button>
                </div>
            </div>
        </div>
    );
};

export default CodeReview;
