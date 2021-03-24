import React from "react";
import { Link } from "react-router-dom";

function CourseListItem(props) {
  return (
    <div className="course-list-item">
      <Link to={`/course/${props.course.id}`}>
        <img
          src={props.course.image}
          alt="코스 대표 이미지"
          className="course-img"
          onClick={() => {
            props.handleClick(props.course);
          }}
        />
      </Link>
      <div className="course-contents">
        <div className="course-title">{props.course.title}</div>
        <div className="course-desc">{props.course.description}</div>
      </div>
    </div>
  );
}

export default CourseListItem;
