import React from 'react';
import './CSS/myinfo.css';
import { withRouter } from 'react-router-dom';

function myinfo(props) {
  return (
    <div className="myinfo">
      <div className="myinfo-form">
        <h1>My Info</h1>
        <form>
          <label className="username">
            Username :
            <input type="text" disabled />
          </label>
          <label className="email">
            Email :
            <input type="email" disabled />
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
          <textarea className="bio-textarea"></textarea>
        </form>
        <div className="myinfo-btn">
          <button className="btn-myKitchen">My Kitchen</button>
          <button className="btn-delete-account">탈퇴하기</button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(myinfo);
