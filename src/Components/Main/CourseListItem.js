import React from "react";
import { Link } from "react-router-dom";
import { setCourseInfo } from "../../actions/course_action";
import { useSelector, useDispatch } from "react-redux";

function CourseListItem(props) {
  const courseInfo = useSelector((state) => state.courseReducer.courseInfo);
  const dispatch = useDispatch();
  console.log("CourseListItem", props.course);

  const handleClick = (course) => {
    dispatch(setCourseInfo(course));
  };

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
