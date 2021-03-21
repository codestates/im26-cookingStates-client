import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../actions/user_action';
import '../../pages/CSS/login.css';
import bgImgLogin from '../../Images/login-bg-img.png';
import logoImgYellow from '../../Images/logo-1-yellow.png';
import { Link, withRouter } from 'react-router-dom';

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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(userLogin(body)).then((res) => {
      if (res.payload) {
        // props.loginHandler(true);
        props.history.push('/');
      } else {
        alert('Error'); // todo: 에러 핸들링
      }
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
            <input className="input-email" placeholder="Insert Your Email" type="email" onChange={onEmailHandler}></input>
          </div>
          <div className="input-password">
            <input className="input-pw" type="password" placeholder="Insert Your Password" onChange={onPasswordHandler}></input>
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
