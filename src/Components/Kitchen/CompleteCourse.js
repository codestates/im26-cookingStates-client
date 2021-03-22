import React from 'react';

function CompleteCourse(props) {
  return (
    <div className="completecourse">
      <div className="completecourse-title">완료한 요리 코스</div>
      <div className="completecourse-box">
        <div className="complete-course-entry">
          <div className="complete-course-name">비건</div>
          <div className="complete-course-date">2021-03-22</div>
        </div>
        <div className="complete-course-entry">
          <div className="complete-course-name">양식</div>
          <div className="complete-course-date">2021-03-22</div>
        </div>
        <div className="complete-course-entry">
          <div className="complete-course-name">혼술 안주</div>
          <div className="complete-course-date">2021-03-22</div>
        </div>
      </div>
    </div>
  );
}

export default CompleteCourse;
