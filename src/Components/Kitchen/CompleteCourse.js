import React, { useState } from "react";
import axios from "axios";
import API from "../../api";

function CompleteCourse(props) {
  const userInfo = props.UserData.data;
  const completeCourseEndDate = userInfo.course.passedCourses;

  const [completeCourse, setcompleteCourse] = useState([]);

  // 완료한 요리 코스가 있는 경우
  if (
    userInfo &&
    userInfo.course &&
    userInfo.course.passedCourses &&
    !completeCourse.length
  ) {
    const passList = userInfo.course.passedCourses;
    const courseIds = passList.reduce((acc, cur) => {
      return [...acc, cur.courseId];
    }, []);
    axios.get(API.COURSE_INFO).then((res) => {
      const result = res.data.filter((el) => {
        return courseIds.includes(el.id);
      });
      setcompleteCourse(result);
    });
  }

  return (
    <div>
      {completeCourse.length > 0 ? (
        <div className="completecourse">
          <div className="completecourse-title">완료한 요리 코스</div>
          <div className="completecourse-box">
            <div className="complete-course-entry">
              {completeCourse.map((ele) => {
                return <div className="complete-course-name">{ele.title}</div>;
              })}
            </div>
            <div className="complete-course-entry">
              {completeCourseEndDate.map((ele) => {
                return (
                  <div className="complete-course-date">{ele.endDate}</div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="completecourse">
          <div className="completecourse-title">완료한 요리 코스</div>
          <div>수강완료한 요리 코스가 없습니다!</div>
        </div>
      )}
    </div>
  );
}

export default CompleteCourse;
