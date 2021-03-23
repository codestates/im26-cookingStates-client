import React, { useState, useEffect } from "react";
import CourseListItem from "./CourseListItem";
import "../../pages/CSS/courseList.css";
import axios from "axios";
import API from "../../api";
import { useSelector, useDispatch } from "react-redux";
import { setCourseInfo } from "../../actions/course_action";
import { setRecipeInfo } from "../../actions/recipe_action";

function CourseList(props) {
  // map을 하려면 전체 코스 정보(Courses) 가 있어야됨
  const dispatch = useDispatch();

  const [Courses, setCourses] = useState([]);

  const getCourses = () => {
    axios.get(API.COURSE_INFO).then((res) => {
      setCourses(res.data);
    });
  };
  useEffect(() => {
    getCourses();
  }, []);

  /* 코스 */
  const handleClick = (course) => {
    dispatch(setCourseInfo(course));
  };

  return (
    <div className="course-list">
      {Courses.map((course) => (
        <CourseListItem
          course={course}
          key={course.id}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default CourseList;
