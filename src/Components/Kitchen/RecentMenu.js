import React, { useState, useEffect } from "react";
import Coursekoimg from "../../Images/course-korean.png";
import axios from "axios";
import API from "../../api";

function RecentMenu(props) {
  const userInfo = props.UserData.data;
  const courseInfo = props.CourseInfo;
  const recentCourse = userInfo.course.recentCourse;
  const percent = String(
    (userInfo.course.passedRecipesOfRecentCourse.length / 5) * 100
  ).concat("%"); // 40

  // recentCourse가 있는 경우 없는 경우 삼항연산자로 써주기
  return (
    <>
      {userInfo.course.recentCourse ? (
        <div className="recentmenu">
          <div className="recentmenu-info">
            <div className="recentmenu-info-header">
              <span>최근에 배운 코스</span>
            </div>
            {courseInfo && (
              <div className="recentmenu-info-article">
                <div className="recentmenu-info-article-session-content">
                  <span className="recent-course">
                    {courseInfo[recentCourse - 1].title}
                  </span>
                </div>
                <div className="recentmenu-info-article-session-img">
                  <img src={courseInfo[recentCourse - 1].image} alt="이미지" />
                </div>
              </div>
            )}
            <div className="progress-bg-bar">
              <div className="progress-bar" style={{ width: `${percent}` }}>
                <label>{percent}</label>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="recentmenu">
          <div className="recentmenu-info">
            <div className="recentmenu-info-header">
              <span>최근에 배운 코스</span>
            </div>
            <span>아직까지 학습한 요리가 없네요!</span>
          </div>
        </div>
      )}
    </>
  );
}

export default RecentMenu;
