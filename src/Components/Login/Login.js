import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { render } from "@testing-library/react";
import "../../pages/CSS/login.css";
import bgImgLogin from "../../Images/login-bg-img.png";

function Login(props) {
  const { handleResponseSuccess } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // 핸들러 정의

  const handleLogin = () => {
    // TODO : 서버에 로그인 요청 후 처리하세요.
    // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
    if (!email || !password) {
      setErrorMsg("아이디 및 비밀번호를 정확히 입력해주세요.");
      return;
    } else {
      setErrorMsg("");
    }

    return axios
      .post("https://localhost:4000/login", {
        email: email,
        password: password,
      })
      .then(handleResponseSuccess)
      .catch((err) => {
        setErrorMsg("로그인 정보가 올바르지 않습니다.");
      });
  };

  return (
    <div className="login">
      <div className="bgImgLogin">
        <img src={bgImgLogin} alt="bgLogin" />
      </div>
      <div className="form-login">
        <h1>Log In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="input-id">
              <label>Email</label>
              <input
                className="input-email"
                type="email"
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              ></input>
            </div>
            <div className="input-pw">
              <label>Password</label>
              <input
                type="password"
                onChange={({ target: { value } }) => setPassword(value)}
              ></input>
            </div>
          </div>
          {/* 없는 아이디거나 비밀번호가 일치하지 않을 경우 */}
          <div className="alert-login">{errorMsg}</div>

          {/* 회원가입 유도 <Link> */}
          <div className="link-signup">아직 아이디가 없으신가요?</div>
          <button className="btn-login" type="submit" onClick={handleLogin}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
