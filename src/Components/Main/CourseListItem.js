import React from "react";

function CourseListItem(props) {
  console.log(props);
  return (
    <div className="course-list-item">
      <div className="course-img">
        <img src={props.course.image} alt="코스 대표 이미지" />
      </div>
      <div>
        <div className="course-title">{props.course.title}</div>
        <div className="course-desc">{props.course.description}</div>
        <button className="btn-learn">지금 학습하기</button>
      </div>
    </div>
  );
}

export default CourseListItem;
