import React from 'react';
import axios from 'axios';
import API from '../../api';

function Kitchen(props) {
  const getUserInfo = (id) => {
    // ! dispatch로 수정해야 함
    axios
      .get(API.USER_INFO + `/${id}/info`, {
        withCredentials: true,
        Headers: {
          // Authorization: // accessToken 넣어서 요청
        },
      })
      .then((res) => {
        //! redux 적용시 코드 추가
      });
  };

  return <div></div>;
}

export default Kitchen;
