import React, { useState, useEffect } from "react";
import CourseListItem from "./CourseListItem";
import "../../pages/CSS/courseList.css";
import axios from "axios";
import API from "../../api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ViewCustomRecipe from "../Course/ViewCustomRecipe";

function CourseList(props) {
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const [Courses, setCourses] = useState([]);
  const [CustomRecipes, setCustomRecipes] = useState([]);

  useEffect(() => {
    axios.get(API.COURSE_INFO).then((res) => {
      setCourses(res.data);
    });
    axios
      .get(API.CUSTOM_RECIPE_INFO)
      .then((res) => {
        setCustomRecipes(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h1 id="cours-list">기본 코스</h1>
      <div className="course-list">
        {Courses.map((course) => (
          <CourseListItem course={course} key={course.id} />
        ))}
      </div>
      {userInfo && userInfo.data.isPassed && (
        <div className="custom-wrapper">
          <div className="custom-section-header">
            <h1>커스텀 레시피</h1>
            <Link to="/customRecipe">
              <button className="custom-recipe-btn">레시피 등록하기</button>
            </Link>
          </div>
          <div className="custom-recipe-list">
            {CustomRecipes.map((recipe, idx) => {
              return <ViewCustomRecipe recipe={recipe} key={idx} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseList;
