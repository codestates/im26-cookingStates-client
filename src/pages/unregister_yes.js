import React from 'react';
import './CSS/unregister.css';
import Logo from '../Images/logo-1.png';
import Bye from '../Images/goodbye.png';

function unregister_yes() {
  return (
    <>
      <div className="unregister">
        <div className="nav">
          <img src={Logo} alt="logo" />
        </div>
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
            ?? 초후 Main 페이지로 이동합니다!
          </div>
        </div>
      </div>
    </>
  );
}

export default unregister_yes;
