import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAccessToken, setUserInfo } from '../../actions/user_action';
import '../../pages/CSS/login.css';
import bgImgLogin from '../../Images/login-bg-img.png';
import logoImgYellow from '../../Images/logo-1-yellow.png';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';
import API from '../../api';

function Login(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    if (Email && Password) {
      axios
        .post(API.USER_LOGIN, body, {
          withCredentials: true,
        })
        .then((res) => {
          dispatch(setAccessToken(res.data.accessToken));
          props.history.push('/');
        })
        .catch((e) => {
          // console.log("error : ", e);
          alert('아이디와 비밀번호를 확인해주세요');
        });
    } else {
      alert('아이디, 비밀번호를 모두 입력해주세요!!');
    }
  };

  const KAKAO_CLIENT_ID = "5e6428a09b610bb178e40e30eab58591";
  const KAKAO_REDIRECT_URI = "https://cookingstates.cf/login";
  const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const socialLoginHandler = (event) => {
    event.preventDefault();
    window.open(KAKAO_LOGIN_URL, '간편 로그인');
  };

  // 3. 카카오에서 코드를 받음
  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code'); // 카카오에서 받은 인증 코드
    // 4. 코드를 받아서 액세스 토큰 요청
    if (authorizationCode) {
      getKakaoCode(authorizationCode);
    }
  }, []);

  const getKakaoCode = (authorizationCode) => {
    console.log('카카오에서 받은 코드 : ', authorizationCode);

    axios
      .post(
        API.OAUTH_KAKAO, // 5. code, redirect url, client id & key 제공하면, 카카오는 액세스 토큰 반환
        {
          authorizationCode: authorizationCode,
        }
      )
      .then((response) => {
        //console.log("oauth/kakao 응답!!!!!", response.data);
        const { email, userName, isRegistered } = response.data;

        if (isRegistered) {
          // isRegistered가 true일때 (이미 등록된 유저) => 로그인 진행
          let body = {
            email,
            password: String(response.data.id),
          };

          axios
            .post(API.USER_LOGIN, body, {
              withCredentials: true,
            })
            .then((res) => {
              console.log('2. isRegistered가 true일때 ', res.data);
              dispatch(setAccessToken(res.data.accessToken));
              props.history.push('/');
            })
            .catch((e) => {
              // console.log(e);
              alert('아이디와 비밀번호를 확인해주세요');
            });
        } else {
          // isRegistered가 false일때 (등록되지 않은 유저) => 회원가입 진행
          let body = {
            email,
            password: String(response.data.id),
            userName,
            bio: '',
            socialType: 'kakao',
          };

          axios.post(API.USER_REGISTER, body).then((res) => {
            console.log('isRegistered가 false일때 ', res.data);
            props.history.push('/survey');
          });
        }
      });
  };

  return (
    <div className="login">
      <div className="bgImgLogin">
        <img src={bgImgLogin} className="bgImgLogin" alt="bgLogin" />
      </div>
      <div className="form-login">
        <img src={logoImgYellow} className="loginLogo" alt="loginLogo" />
        <span className="title">WELCOME BACK</span>
        <form>
          <div className="input-id">
            <input
              className="input-email"
              placeholder="Insert Your Email"
              type="email"
              onChange={onEmailHandler}
            ></input>
          </div>
          <div className="input-password">
            <input
              className="input-pw"
              type="password"
              placeholder="Insert Your Password"
              onChange={onPasswordHandler}
            ></input>
          </div>
          <div>
            <button
              className="login-btn"
              type="submit"
              onClick={onSubmitHandler}
            >
              로그인
            </button>
            <button
              className="login-btn"
              type="submit"
              onClick={socialLoginHandler}
            >
              kakao 로그인
            </button>
          </div>
          <br />
          <br />
          <Link className="link-signup" to="/signup">
            아직 아이디가 없으신가요?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Login);
