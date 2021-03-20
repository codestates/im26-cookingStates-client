import React, { useState } from 'react';
import API from '../../api';
import axios from 'axios';

function SignUp(props) {
  const [Email, setEmail] = useState('');
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [Bio, setBio] = useState('');

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setUserName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onBioHandler = (event) => {
    setBio(event.currentTarget.value);
  };

  // submit button 클릭시
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (Password !== ConfirmPassword) {
      // 패스워드 불일치
    }
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
      props.history.push('/login');
    });
  };

  return <div></div>;
}

export default SignUp;
