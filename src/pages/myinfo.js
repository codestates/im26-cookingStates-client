import React from 'react';
import NavMykitchen from '../Components/Nav/Nav-mykitchen';
import './CSS/myinfo.css';

function myinfo(props) {
  return (
    <>
      <NavMykitchen />
      <div className="myinfo">
        <div className="myinfo-contents">
          <div className="myinfo-content-form">
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
      </div>
    </>
  );
}

export default withRouter(Myinfo);
