import React from "react";
import "./CSS/myinfo.css";
import { withRouter, Link } from "react-router-dom";

function Myinfo(props) {
  const { userName, email, password, bio } = props.location.state.UserData;
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
            <input
              id="userpw"
              type="password"
              defalutvalue={password}
              readOnly
            />
          </label>
          <label className="pw-confirm">
            Comfirm Password :
            <input id="userpwchk" type="password" readOnly />
          </label>
          <label className="bio">Bio :</label>
          <textarea className="bio-textarea" defaultvalue={bio} readOnly>
            {bio}
          </textarea>
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
          <button
            className="myinfo-update"
            onClick={() => {
              const inputPw = document.querySelector("#userpw");
              const inputPwchk = document.querySelector("#userpwchk");
              const textareaBio = document.querySelector(".bio-textarea");
              const myinfoUpdateBtn = document.querySelector(".myinfo-update");

              if (inputPw.hasAttribute("readOnly")) {
                myinfoUpdateBtn.textContent = "프로필 수정완료";
                inputPw.removeAttribute("readOnly");
                inputPwchk.removeAttribute("readOnly");
                textareaBio.removeAttribute("readOnly");
              } else {
                myinfoUpdateBtn.textContent = "프로필 수정하기";
                inputPw.setAttribute("readOnly", "");
                inputPwchk.setAttribute("readOnly", "");
                textareaBio.setAttribute("readOnly", "");
                inputPw.value = "";
                inputPwchk.value = "";
                textareaBio.value = "";
              }
            }}
          >
            프로필 수정하기
          </button>
          <Link to="/unregister">
            <button className="btn-delete-account">회원탈퇴</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Myinfo);
