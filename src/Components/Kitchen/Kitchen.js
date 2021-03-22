import React from 'react';
import axios from 'axios';
import API from '../../api';
import MedalList from './MedalList';
import CompleteCourse from './CompleteCourse';
import Profile from './Profile';
import RecentMenu from './RecentMenu';

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

  return (
    <div className="kitchen">
      <div className="kitchen-article">
        <div className="kitchen-article-header">
          <h1>My Kitchen</h1>
        </div>
        <div className="kitchen-article-contents">
          <Profile />
          <RecentMenu />
          <MedalList />
          <CompleteCourse />
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
