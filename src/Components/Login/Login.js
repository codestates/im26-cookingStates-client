import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAccessToken, setUserInfo } from "../../actions/user_action";
import "../../pages/CSS/login.css";
import bgImgLogin from "../../Images/login-bg-img.png";
import logoImgYellow from "../../Images/logo-1-yellow.png";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import API from "../../api";

function Login(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    axios
      .post(API.USER_LOGIN, body, { withCredentials: true })
      .then((res) => {
        dispatch(setAccessToken(res.data.accessToken));
        props.history.push("/");
      })
      .catch((e) => {
        // console.log("error : ", e);
        alert("아이디와 비밀번호를 확인해주세요");
      });
  };

  const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=412067486350-ig46bca2fn0mko4cm3cg58l4soducoja.apps.googleusercontent.com&redirect_uri=http://localhost:4000/oauth/google/callback&scope=email&access_type=offline`;

  // 1. 구글 페이지 이동 & 로그인 요청
  const socialLoginHandler = (event) => {
    event.preventDefault();
    console.log(window.location);
    window.location.assign(GOOGLE_LOGIN_URL);
  };

  // 3. 구글에서 코드를 받음
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code"); // 구글에서 받은 인증 코드
    // 4. 코드를 받아서 액세스 토큰 요청
    if (authorizationCode) {
      getGoogleToken(authorizationCode);
    }
  }, []);

  const getGoogleToken = async (authorizationCode) => {
    const resp = await axios
      .post(
        "http://localhost:4000/oauth/google", // 5. code, redirect url, client id & key 제공하면, 구글은 액세스 토큰 반환
        {
          authorizationCode: authorizationCode,
        },
        {
          withCredentials: true,
          headers: {
            accept: "application/json",
          },
        }
      )
      .then((res) => console.log(res));
    console.log(resp);
    // 6. 구글이 유저정보 반환 -> 유저 로그인 및 액세스 토큰 state에 저장
    dispatch(setAccessToken(resp.data.accessToken));
    //props.history.push("/");
  };

  return (
    <div className="login">
      <div className="bgImgLogin">
        <img src={bgImgLogin} className="bgImgLogin" alt="bgLogin" />
      </div>
      <div className="form-login">
        <img src={logoImgYellow} className="loginLogo" alt="loginLogo" />
        <span className="title">WELCOME BACK</span>
        <form>
          <div className="input-id">
            <input
              className="input-email"
              placeholder="Insert Your Email"
              type="email"
              onChange={onEmailHandler}
            ></input>
          </div>
          <div className="input-password">
            <input
              className="input-pw"
              type="password"
              placeholder="Insert Your Password"
              onChange={onPasswordHandler}
            ></input>
          </div>
          <div>
            <button
              className="login-btn"
              type="submit"
              onClick={onSubmitHandler}
            >
              로그인
            </button>
            <button
              className="login-btn"
              type="submit"
              onClick={socialLoginHandler}
            >
              google 로그인
            </button>
          </div>
          <br />
          <br />
          <Link className="link-signup" to="/signup">
            아직 아이디가 없으신가요?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
