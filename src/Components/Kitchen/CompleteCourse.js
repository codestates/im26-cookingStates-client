import React from "react";

function CompleteCourse(props) {
  const userInfo = props.UserData;
  // 완료한 요리 코스가 있는 경우
  console.log(userInfo);

  /* if (userInfo.course.passedCourses.length > 0) {
    return (
      <div className="completecourse">
        <div className="completecourse-title">완료한 요리 코스</div>
        <div className="completecourse-box">
          <div className="complete-course-entry">
            <div className="complete-course-name">비건</div>
            <div className="complete-course-date">2021-03-22</div>
          </div>
        </div>
      </div>
    );
  } else { */
  return (
    <div className="completecourse">
      <div className="completecourse-title">완료한 요리 코스</div>
      <div>수강완료한 요리 코스가 없습니다!</div>
    </div>
  );
}

export default CompleteCourse;
