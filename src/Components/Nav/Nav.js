import React, { useState } from 'react';
import logo from '../Images/logo-1.png';
import '../pages/CSS/Nav.css';
import { Link } from 'react-router-dom';

function Nav(props) {
  //const [IsLogin, setIsLogin] = useState(false);
  console.log(props.IsLogin);
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button
        onClick={() => {
          props.loginHandler(!props.IsLogin);
        }}
      >
        로그인 상태 바꾸기
      </button>

      {props.IsLogin ? (
        <div className="nav-btn-group">
          <Link to="/login" className="btn-login" onClick={props.loginHandler(false)}>
            로그아웃
          </Link>
          <Link to="/mykitchen" className="btn-login">
            my 부엌
          </Link>
          {/* <button className="btn-logout" onClick={props.loginHandler(false)}>
            Log out
          </button>
          <button className="btn-mykitchen">my 부엌</button> */}
        </div>
      ) : (
        <div className="nav-btn-group">
          <Link to="/login" className="btn-login">
            Log in
          </Link>
          {/* <button className="btn-login">Log in</button> */}

          <button className="btn-signup">Sign up</button>
        </div>
      )}
    </div>
  );
}

export default Nav;
