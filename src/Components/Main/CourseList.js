import React from "react";
import CourseListItem from "./CourseListItem";

import courseListData from "../../course.json";

import "../../pages/CSS/courseList.css";

function CourseList() {
  return (
    <div className="course-list">
      {courseListData.map((course) => (
        <CourseListItem course={course} key={course.id} />
      ))}

      {/*  <div className="course-list-item">
        <div className="course-img">
          <img src={koreanImg} alt="한식 코스" />
        </div>
        <div>
          <div className="course-title">한식</div>
          <div className="course-desc">매일 먹는 집밥 만들기</div>
          <button className="btn-learn">지금 학습하기</button>
        </div>
      </div> */}
    </div>
  );
}

export default CourseList;
