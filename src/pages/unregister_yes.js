import React, { useEffect, useState } from 'react';
import './CSS/unregister.css';
import Bye from '../Images/goodbye.png';
import { withRouter } from 'react-router-dom';

const START_SECOND = 5;

function Unregister_yes(props) {
  const [count, setCount] = useState(START_SECOND);

  useEffect(() => {
    if (!count) {
      props.history.push('/');
    } else {
      setInterval(() => {
        setCount(count - 1);
      }, 1000);
    }
  });
  return (
    <>
      <div className="unregister">
        <div className="unregister_yes-content">
          <div className="unregister_yes-content-header">
            <span className="goodbye">Good Bye!!</span>
            <img src={Bye} alt="good bye" className="icon-bye" />
          </div>
          <div className="unregister_yes-content-article">
            <span className="goodbye-desc">
              쿠킹 스테이츠를 <br />
              이용해주셔서 감사합니다
            </span>
          </div>
          <div className="unregister_yes-content-footer">
            {count}초후 메인 페이지로 이동합니다!
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Unregister_yes);
