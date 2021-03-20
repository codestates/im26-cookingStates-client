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
        <button className="btn-logout">Log Out</button>
        <button className="btn-Mykitchen">My Kitchen</button>
      </div>
    </div>
  );
}

export default Nav;
