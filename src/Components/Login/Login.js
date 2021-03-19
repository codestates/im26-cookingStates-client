import React from "react";
import "../../pages/CSS/login.css";
import bgImgLogin from "../../Images/login-bg-img.png";
import logoImgYellow from "../../Images/logo-1-yellow.png";
import { Link, withRouter } from "react-router-dom";

function Login(props) {
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
            ></input>
          </div>
          <div className="input-pw">
            <input type="password" placeholder="Insert Your Password"></input>
          </div>
          <div className="link-signup">아직 아이디가 없으신가요?</div>

          <Link to="/" className="login-btn">
            로그인
          </Link>
          {/* <button className="login-btn" type="submit">
            로그인
          </button> */}
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
