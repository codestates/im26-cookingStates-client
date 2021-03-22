import React from "react";

function MenuNav(props) {
  console.log(props);
  return (
    <>
      <div className="menu-Nav">
        <div>
          <div className="menu-Nav-Title">한식</div>
          <div className="menu-Nav-item">퓨전떡갈비</div>
          <div className="menu-Nav-item">두부달걀덮밥</div>
          <div className="menu-Nav-item">해물순두부된장찌개</div>
          <div className="menu-Nav-item">단호박과 새콤달콤 과일 갈비찜</div>
          <div className="menu-Nav-item">
            방울토마토를 곁들인 너비아니구이와 쌈밥
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuNav;
