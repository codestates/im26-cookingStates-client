import React, { useState, useEffect } from "react";
import CourseListItem from "./CourseListItem";
import "../../pages/CSS/courseList.css";
import axios from "axios";
import API from "../../api";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function CourseList(props) {
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const [Courses, setCourses] = useState([]);
  // map을 하려면 전체 코스 정보(Courses) 가 있어야됨
  const getCourses = () => {
    axios.get(API.COURSE_INFO).then((res) => {
      setCourses(res.data);
    });
  };
  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <div className="course-list">
        {Courses.map((course) => (
          <CourseListItem course={course} key={course.id} />
        ))}
      </div>
      {userInfo && userInfo.data.isPassed && (
        <div>
          <h1>커스텀 레시피</h1>
          <Link to="/customRecipe">
            <button>레시피 등록하기</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CourseList;
