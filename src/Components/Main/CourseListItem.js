import React from "react";
import { withRouter } from "react-router-dom";
import { setCourseInfo } from "../../actions/course_action";
import { useDispatch } from "react-redux";

function CourseListItem(props) {
  const dispatch = useDispatch();

  return (
    <div className="course-list-item">
      <img
        src={props.course.image}
        alt="코스 대표 이미지"
        className="course-img"
        onClick={() => {
          dispatch(setCourseInfo(props.course));
          props.history.push(`/course/${props.course.id}`);
        }}
      />

      <div className="course-contents">
        <div className="course-title">{props.course.title}</div>
        <div className="course-desc">{props.course.description}</div>
      </div>
    </div>
  );
}

export default withRouter(CourseListItem);
