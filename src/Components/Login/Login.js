import React, { useState } from "react";
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
          <button className="login-btn" type="submit" onClick={onSubmitHandler}>
            로그인
          </button>
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
