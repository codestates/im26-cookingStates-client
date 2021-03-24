import './CSS/welcome.css';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const START_SECOND = 5;

function Welcome(props) {
  const [count, setCount] = useState(START_SECOND);

  useEffect(() => {
    if (!count) {
      props.history.push('/login');
    } else {
      setInterval(() => {
        setCount(count - 1);
      }, 1000);
    }
  });
  return (
    <div className="welcome">
      <div className="container">
        <div className="welcome-header">
          <div className="welcome-header-title">WELCOME!</div>
          <div className="welcome-header-desc">
            쿠킹 스테이츠에서 최고의 쉐프로 성장하세요!
          </div>
        </div>
        <div className="welcome-contents">
          {/* username === 로그인한 유저이름 */}
          <div className="welcome-contents-level1">
            <span className="welcome-username">
              쉐프님의 요리 레벨은
              {/* <span className="level1">{props.location.state.score}</span> */}
              입니다.
            </span>
          </div>
        </div>
        <div className="welcome-footer">
          <div className="welcome-footer-content">
            {count}초 뒤 메인 페이지로 이동합니다
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Welcome);
