import "./CSS/welcome.css";

import React from "react";

function Welcome(props) {
  return (
    <div className="container">
      <div className="welcome header">
        <div className="welcome-title">WELCOME!</div>
        <div className="welcome-desc">
          쿠킹 스테이츠에서 최고의 쉐프로 성장하세요!
        </div>
      </div>
      <div className="welcome contents">
        <div>
          <span className="username">'username'</span> 쉐프님의 요리 레벨은{" "}
          <span className="level" id="lv1">
            Lv1.
          </span>
          입니다.
        </div>
        <div>
          <span className="username">'username'</span> 쉐프님의 요리 레벨은{" "}
          <span className="level" id="lv2">
            Lv2.
          </span>
          입니다.
        </div>
        <div>
          <span className="username">'username'</span> 쉐프님의 요리 레벨은{" "}
          <span className="level" id="lv3">
            Lv3.
          </span>
          입니다.
        </div>
      </div>
      <div className="welcome footer">
        <div>...초 뒤 메인 페이지로 이동합니다</div>
      </div>
    </div>
  );
}

export default Welcome;
