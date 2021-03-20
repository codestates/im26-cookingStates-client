import React from "react";
import "../../pages/CSS/signup.css";

function SignUpCard(props) {
  return (
    /*   <div className="signupCard">
  
    
      <span className="card-label">쉐프님의 이름을 알려주세요</span>
      <input className="input-username" type="text"></input>

      <div className="btn-group">
        <button className="btn-next">다음</button>
        <div className="valid-chk"></div>
      </div>
    </div> */

    /* <div className="signupCard">
      <div className="card-label">쉐프님의 이메일 주소를 알려주세요</div>
      <div className="card-desc">이메일 주소는 아이디로 사용됩니다.</div>
      <input className="input-email default" type="email"></input>
      <div className="valid-result">
        <input className="input-email" type="email"></input>
        <input className="input-email success" type="email"></input>
        <input className="input-email danger" type="email"></input>
        <span className="danger">이미 등록된 이메일 주소입니다.</span>
        <br></br>
        <span className="danger">유효하지 않은 이메일 형식입니다.</span>
      </div>
    </div> */

    /* <div className="signupCard">
      <div className="card-label">쉐프님의 비밀번호를 입력하세요</div>
      <div className="card-desc">
        알파벳 대소문자,숫자와 특수문자를 1개 이상 포함하여 8자리 이상의
        비밀번호를 작성하세요.
      </div>
      <input className="input-password" type="password"></input>
      <input className="input-password success" type="password"></input>
      <input className="input-password danger" type="password"></input>
      <span className="danger">비밀번호 형식이 올바르지 않습니다.</span>

      <div className="btn-group">
        <button className="btn-back">뒤로</button>
        <button className="btn-next">다음</button>
      </div>


    </div> */

    <div className="signupCard">
      <div className="card-label">쉐프님을 소개해주세요</div>
      <div className="card-desc"></div>
      <textarea className="input-bio" type="text"></textarea>

      <div className="btn-group">
        <button className="btn-back">뒤로</button>
        <button className="btn-next">다음</button>
      </div>
    </div>
  );
}

export default SignUpCard;
