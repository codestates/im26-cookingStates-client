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
    </div>
  );
}

export default CourseList;
