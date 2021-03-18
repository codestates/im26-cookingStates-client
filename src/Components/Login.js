import React from "react";
import "../CSS/login.css";

function Login(props) {
  return (
    <div>
      <div>
        <div className="input-id">
          <label>Email</label>
          <input type="text"></input>
        </div>
        <div className="input-pw">
          <label>Password</label>
          <input type="password"></input>
        </div>
      </div>
      {/* 없는 아이디거나 비밀번호가 일치하지 않을 경우 */}
      <div className="alert-login">아이디 및 비밀번호가 일치하지 않습니다.</div>

      {/* 회원가입 유도 */}
      <div>아직 아이디가 없으신가요?</div>
      <button className="btn-login" type="submit">
        로그인
      </button>
    </div>
  );
}

export default Login;
