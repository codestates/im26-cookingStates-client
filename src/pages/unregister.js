import React from "react";
import "./CSS/unregister.css";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import API from "../api";
import axios from "axios";
import { userLogout } from "../actions/user_action";

function Unregister(props) {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const userInfo = useSelector((state) => state.userReducer.userInfo);

  const onClickHandler = () => {
    axios.post(
      API.USER_UNREGISTER,
      { email: userInfo.data.email },
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  };

  return (
    <>
      <div className="unregister">
        <div className="unregister-contents">
          <div className="unregister-contents-header">
            <h1>정말 떠나실 건가요 ?</h1>
          </div>
          <div className="unregister-contents-article">
            <div className="warning-unregister">
              <div>✔️ 요리 코스 학습 내역이 모두 삭제 됩니다</div>
              <div>✔️ 획득한 요리 칭호도 삭제됩니다</div>
              <div>✔️ 삭제된 개인정보는 복구할 수 없습니다</div>
            </div>
          </div>
          <div className="unregister-contents-footer">
            <div className="confirm-unregister">
              <input type="checkbox" />
              <span>쿠킹스테이츠 회원탈퇴에 동의합니다</span>
            </div>
            <div className="confirm-unregister-button">
              <button
                className="btn-myKitchen"
                onClick={() => {
                  props.history.goBack();
                }}
              >
                돌아가기
              </button>
              <button
                className="btn-delete-account"
                onClick={() => {
                  onClickHandler();
                  dispatch(userLogout());
                  let location = {
                    pathname: "/unregister_yes",
                  };
                  props.history.push(location);
                }}
              >
                탈퇴하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Unregister);
