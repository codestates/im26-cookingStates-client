import React from "react";
import "./CSS/myinfo.css";
import { withRouter, Link } from "react-router-dom";

function myinfo(props) {
  const { userName, email, bio } = props.location.state.UserData;
  return (
    <div className="myinfo">
      <div className="myinfo-form">
        <h1>My Info</h1>
        <form className="myinfoform">
          <label className="username">
            Username :
            <input type="text" disabled value={userName} />
          </label>
          <label className="email">
            Email :
            <input type="email" disabled value={email} />
          </label>
          <label className="pw">
            Password :
            <input type="password" />
          </label>
          <label className="pw-confirm">
            Comfirm Password :
            <input type="password" />
          </label>
          <label className="bio">Bio :</label>
          <textarea className="bio-textarea" value={bio}></textarea>
        </form>
        <div className="myinfo-btn">
          <button
            className="btn-myKitchen"
            onClick={() => {
              props.history.goBack();
            }}
          >
            My Kitchen
          </button>
          <Link to="/unregister">
            <button className="btn-delete-account">회원탈퇴</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(myinfo);
