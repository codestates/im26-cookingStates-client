import React, { useState, useEffect } from 'react';
import CourseListItem from './CourseListItem';
import '../../pages/CSS/courseList.css';
import axios from 'axios';
import API from '../../api';

function CourseList() {
  const [Courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    axios.get(API.COURSE_INFO).then((res) => {
      setCourses(res.data);
    });
  };

  return (
    <div className="course-list">
      {Courses.map((course) => (
        <CourseListItem course={course} key={course.id} />
      ))}
    </div>
  );
}

export default CourseList;
