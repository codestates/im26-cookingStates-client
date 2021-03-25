import React from "react";
import Coursekoimg from "../../Images/course-korean.png";

function RecentMenu(props) {
  console.log(props.UserData.course);

  return (
    <div className="recentmenu">
      <div className="recentmenu-info">
        <div className="recentmenu-info-header">
          <span>최근에 배운 코스</span>
        </div>
        <div className="recentmenu-info-article">
          <div className="recentmenu-info-article-session-content">
            <span className="recent-course">한식</span>
          </div>
          <div className="recentmenu-info-article-session-img">
            <img src={Coursekoimg} alt="한식 이미지" />
          </div>
        </div>
        <div className="progress-bg-bar">
          <div className="progress-bar" style={{ width: "25%" }}>
            <label>25%</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentMenu;
