import React, { useState, useEffect } from "react";
import logo from "../../Images/logo-1.png";
import "../../pages/CSS/Nav.css";
import { Link, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import API from "../../api";
import { setUserInfo, userLogout } from "../../actions/user_action";

function Nav(props) {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const [IsAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (props.location.pathname !== "/login" || accessToken) {
      async function fetchUserData() {
        const userData = await axios.get(API.USER_INFO, {
          withCredentials: true,
          headers: {
            authorization: "Bearer " + accessToken,
          },
        });
        if (userData.data.type === "A") {
          setIsAdmin(true);
        }
        dispatch(setUserInfo(userData));
      }
      fetchUserData();
    }
  }, [accessToken]);

  return (
    <div className="nav">
      <div className="user-info">
        {userInfo ? (
          <div>안녕하세요 !! {userInfo.data.userName}님</div>
        ) : (
          <div>쿠킹 스테이츠에 오신걸 환영합니다!!</div>
        )}
      </div>
      {IsAdmin && (
        <div className="test-page">
          <Link to="/test">
            <button>테스트 페이지로 이동하기</button>
          </Link>
        </div>
      )}

      <div
        className="logo"
        onClick={() => {
          props.history.push("/");
        }}
      >
        <img src={logo} alt="logo" />
      </div>

      {accessToken ? (
        <div className="nav-btn-group">
          <button className="btn-logout">
            <Link
              to="/login"
              onClick={() => {
                setIsAdmin(false);
                dispatch(userLogout());
              }}
            >
              로그아웃
            </Link>
          </button>
          <button className="btn-Mykitchen">
            <Link to="/mykitchen">My Kitchen</Link>
          </button>
        </div>
      ) : (
        <div className="nav-btn-group">
          <button className="btn-login">
            <Link to="/login">Log in</Link>
          </button>
          <Link to="/signup">
            <button className="btn-signup">Sign up</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default withRouter(Nav);
