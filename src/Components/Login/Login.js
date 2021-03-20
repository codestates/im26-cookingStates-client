import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../actions/user_action';
import '../../pages/CSS/login.css';
import bgImgLogin from '../../Images/login-bg-img.png';
import logoImgYellow from '../../Images/logo-1-yellow.png';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import API from '../../api';
import { bindActionCreators } from 'redux';

function Login(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  // login button 클릭
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log('Email', Email);
    console.log('Password', Password);

    let body = {
      email: Email,
      password: Password,
    };

    // 액션 생성 함수에 들어가는 부분
    // dispatch로 수정해야 함
    dispatch(userLogin(body))
      .then((res) => {
        if (res.payload.login) {
          props.history.push('/');
        }
      })
      .catch((err) => console.log(err)); // 지우기

    // axios
    //   .post(API.USER_LOGIN, body, { withCredentials: true })
    //   .then((res) => {
    //     console.log('AccessToken', res.data.accessToken);
    //     // dispatch & reducer로 token, login, admin 바꿔주기
    //     props.loginHandler(true);
    //     props.getAccessToken(res.data.accessToken);
    //     props.history.push('/');
    //   })
    //   .catch((err) => console.log(err)); // 지우기
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
            <input className="input-email" placeholder="Insert Your Email" type="email" onChange={onEmailHandler}></input>
          </div>
          <div className="input-pw">
            <input type="password" placeholder="Insert Your Password" onChange={onPasswordHandler}></input>
          </div>
          <div className="link-signup">아직 아이디가 없으신가요?</div>

          {/* <Link to="/" className="login-btn">
            로그인
          </Link> */}
          <button className="login-btn" type="submit" onClick={onSubmitHandler}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
