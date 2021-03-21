import React, { useState, useEffect } from "react";
import logo from "../../Images/logo-1.png";
import "../../pages/CSS/Nav.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import API from "../../api";

function Nav(props) {
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const [UserData, setUserData] = useState({});

  useEffect(() => {
    async function fetchUserData() {
      const userData = await axios.get(API.USER_INFO + `${}/info`, {
        withCredentials: true,
        headers: {
          authorization: "Bearer " + accessToken,
        },
      });
      setUserData(userData);
    }
    fetchUserData();
  }, [accessToken]);

  console.log("UserData", UserData);

  return (
    <div className="nav">
      <div>{UserData.userName}</div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {accessToken ? (
        <div className="nav-btn-group">
          <button className="btn-logout">
            <Link to="/login" onClick={props.loginHandler(false)}>
              로그아웃
            </Link>
          </button>
          <button className="btn-Mykitchen">
            <Link to="/mykitchen">my 부엌</Link>
          </button>
          {/* <button className="btn-logout" onClick={props.loginHandler(false)}>
            Log out
          </button>
          <button className="btn-mykitchen">my 부엌</button> */}
        </div>
      ) : (
        <div className="nav-btn-group">
          <button className="btn-login">
            <Link to="/login">Log in</Link>
          </button>
          {/* <button className="btn-login">Log in</button> */}
          <button className="btn-signup">Sign up</button>
        </div>
      )}
    </div>
  );
}

export default Nav;
