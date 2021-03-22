import React from 'react';
import Profilelogo from '../../Images/logo-1-yellow.png';

function Profile(props) {
  return (
    <div className="profile">
      <div className="profile-contents">
        <div className="profile-header">
          <span>Chef님 프로필</span>
        </div>
        <div className="profile-article">
          <div className="profile-logo">
            <img src={Profilelogo} alt="logo" />
          </div>
          <div className="profile-article-content">
            <span>
              Chef님 <br /> 안녕하세요~!
            </span>
            <button>프로필 수정</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
