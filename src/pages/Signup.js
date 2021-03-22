import React, { useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import API from "../api";
// import SignUpCard from "../Components/Signup/SignUpCard";
import Survey from "../Components/Signup/Survey";
import "./CSS/signup.css";

const PASSWORD_RE = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
const EMAIL_RE = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

function Signup(props) {
  const [Email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Bio, setBio] = useState("");
  const [Index, setIndex] = useState(0);

  const onNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const onEmailHandler = (event) => {
    const regex = new RegExp(EMAIL_RE, "i");
    const btn = document.querySelector(".email-vailidation-check");
    document.querySelector("#email-next-btn").classList.add("display-none");
    btn.textContent = "이메일 중복 검사";
    if (regex.test(event.target.value)) {
      setEmail(event.currentTarget.value);
      document.querySelector("#emailInputForm").classList.remove("danger");
    } else {
      setEmail(event.currentTarget.value);
      document.querySelector("#emailInputForm").classList.add("danger");
    }
  };

  const onPasswordHandler = (event) => {
    const regex = new RegExp(PASSWORD_RE, "i");
    const password = document.querySelector(".input-password");
    if (regex.test(event.currentTarget.value)) {
      setPassword(event.currentTarget.value);
      password.classList.remove("danger");
      password.classList.add("success");
      document
        .querySelector("#password-next-btn")
        .classList.remove("display-none");
    } else {
      setPassword(event.currentTarget.value);
      password.classList.add("danger");
      password.classList.remove("success");
      document
        .querySelector("#password-next-btn")
        .classList.add("display-none");
    }
  };

  const onBioHandler = (event) => {
    setBio(event.currentTarget.value);
  };

  // submit button 클릭시
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: Email,
      password: Password,
      userName: UserName,
      bio: Bio,
    };

    // 액션 생성 함수에 들어가는 부분
    // ! dispatch로 수정해야 함
    axios.post(API.USER_REGISTER, body).then((res) => {
      //! redux 적용시 코드 추가
      props.history.push("/login");
    });
  };

  const nameCard = (
    <div className="signupCard">
      <span className="card-label">쉐프님의 이름을 알려주세요</span>
      <input
        id="userNameInputForm"
        className="input-username"
        type="text"
        onChange={onNameHandler}
        value={UserName}
      ></input>
      <div className="btn-group">
        <button
          className="btn-next"
          onClick={() => {
            if (document.querySelector(".input-username").value) {
              setIndex(Index + 1);
            } else {
              document
                .querySelector(".valid-chk")
                .classList.remove("display-none");
            }
          }}
        >
          다음
        </button>
        <div className="valid-chk display-none">아이디를 입력해주세요</div>
      </div>
    </div>
  );

  const emailCard = (
    <div className="signupCard">
      <div className="card-label">쉐프님의 이메일 주소를 알려주세요</div>
      <div className="card-desc">이메일 주소는 아이디로 사용됩니다.</div>
      <input
        id="emailInputForm"
        className="input-email default"
        type="email"
        onChange={onEmailHandler}
        value={Email}
      ></input>
      <button
        className="email-vailidation-check"
        onClick={async () => {
          const result = await axios.post(API.EMAIL_CHECK, {
            email: Email,
          });
          if (result.data === "ok") {
            const btn = document.querySelector(".email-vailidation-check");
            btn.textContent = "인증완료";
            document
              .querySelector("#email-next-btn")
              .classList.remove("display-none");
          } else {
            const btn = document.querySelector(".email-vailidation-check");
            btn.textContent = "이미 등록된 이메일 입니다!";
          }
        }}
      >
        이메일 중복 검사
      </button>
      <br />
      <div className="btn-group">
        <button
          className="btn-back"
          onClick={() => {
            setIndex(Index - 1);
          }}
        >
          뒤로
        </button>
        <button
          id="email-next-btn"
          className="btn-next display-none"
          onClick={() => {
            setIndex(Index + 1);
          }}
        >
          다음
        </button>
      </div>
      <div className="valid-result">
        {/* <input className="input-email success" type="email"></input>
        <input className="input-email danger" type="email"></input> */}
        <br></br>
        {/* <span className="danger">이미 등록된 이메일 주소입니다.</span>
        <span className="danger">유효하지 않은 이메일 형식입니다.</span> */}
      </div>
    </div>
  );

  const passwordCard = (
    <div className="signupCard">
      <div className="card-label">쉐프님의 비밀번호를 입력하세요</div>
      <div className="card-desc">
        알파벳 대소문자,숫자와 특수문자를 1개 이상 포함하여 8자리 이상의
        비밀번호를 작성하세요.
      </div>
      <input
        className="input-password"
        type="password"
        onChange={onPasswordHandler}
        onFocus={onPasswordHandler}
        value={Password}
      ></input>
      <div className="btn-group">
        <button
          className="btn-back"
          onClick={() => {
            setIndex(Index - 1);
          }}
        >
          뒤로
        </button>
        <button
          id="password-next-btn"
          className="btn-next display-none"
          onClick={() => {
            setIndex(Index + 1);
          }}
        >
          다음
        </button>
      </div>
    </div>
  );

  const bioCard = (
    <div className="signupCard">
      <div className="card-label">쉐프님을 소개해주세요</div>
      <div className="card-desc"></div>
      <textarea
        className="input-bio"
        type="text"
        onChange={onBioHandler}
        value={Bio}
      ></textarea>

      <div className="btn-group">
        <button
          className="btn-back"
          onChange={onBioHandler}
          onClick={() => {
            setIndex(Index - 1);
          }}
        >
          뒤로
        </button>
        <button
          className="btn-next"
          onClick={() => {
            setIndex(Index + 1);
            // db user 넣기
            axios.post(API.USER_REGISTER, {
              email: Email,
              userName: UserName,
              password: Password,
              bio: Bio,
              score: 0,
            });
          }}
        >
          회원가입 완료!
        </button>
      </div>
    </div>
  );

  let signupCardList = [nameCard, emailCard, passwordCard, bioCard, <Survey />];

  return <>{signupCardList[Index]}</>;
}

export default withRouter(Signup);
