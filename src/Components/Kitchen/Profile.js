import React from "react";
import Profilelogo from "../../Images/logo-1-yellow.png";
import { Link, withRouter } from "react-router-dom";

function Profile(props) {
  console.log(props);
  const userInfo = props.UserData.data;
  console.log(userInfo);

  return (
    <div className="profile">
      <div className="profile-contents">
        <div className="profile-header">
          <span>{userInfo.userName}님 프로필</span>
        </div>
        <div className="profile-article">
          <div className="profile-logo">
            <img src={Profilelogo} alt="logo" />
          </div>
          <div className="profile-article-content">
            <span>
              {userInfo.userName}님 <br /> 안녕하세요~!
            </span>
            <button
              onClick={() => {
                let location = {
                  pathname: "/myinfo",
                  state: { UserData: userInfo },
                };
                props.history.push(location);
              }}
            >
              프로필 수정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Profile);
