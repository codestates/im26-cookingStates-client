import React from 'react';
import logo from '../../Images/logo-1.png';
import '../../pages/CSS/nav.css';

function Nav(props) {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="nav-btn-group">
        <button className="btn-login">Log in</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </div>
  );
}

export default Nav;
