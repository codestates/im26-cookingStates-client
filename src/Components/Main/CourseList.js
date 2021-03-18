import React from 'react';
// import CourseListItem from "./CourseListItem";
import koreanImg from '../../Images/course-korean.png';
import dessertImg from '../../Images/course-dessert.png';
import beerImg from '../../Images/course-beer.png';
import veganImg from '../../Images/course-vegan.png';
import westernImg from '../../Images/course-western.png';

import '../../pages/CSS/courseList.css';

function CourseList(props) {
  return (
    <div className="course-list">
      {/*  {courses.map((course) => (
        <CourseListItem
          course={course}
          key={course.id}
          handleClick={handleClickItem}
        />
      ))} */}
      <div className="course-list-item">
        <div className="course-img">
          <img src={koreanImg} alt="한식 코스" />
        </div>
        <div>
          <div className="course-title">한식</div>
          <div className="course-desc">매일 먹는 집밥 만들기</div>
          <button className="btn-learn">지금 학습하기</button>
        </div>
      </div>

      <div className="course-list-item">
        <div className="course-img">
          <img src={westernImg} alt="양식 코스" />
        </div>
        <div>
          <div className="course-title">양식</div>
          <div className="course-desc">양식 스킬 만렙 찍기</div>
          <button className="btn-learn">지금 학습하기</button>
        </div>
      </div>

      <div className="course-list-item">
        <div className="course-img">
          <img src={beerImg} alt="술안주 코스" />
        </div>
        <div>
          <div className="course-title">술안주</div>
          <div className="course-desc">혼술해도 괜찮아...맛있으니까</div>
          <button className="btn-learn">지금 학습하기</button>
        </div>
      </div>

      <div className="course-list-item">
        <div className="course-img">
          <img src={veganImg} alt="채식 코스" />
        </div>
        <div>
          <div className="course-title">비건</div>
          <div className="course-desc">맛도 좋고 지구도 좋아하는</div>
          <button className="btn-learn">지금 학습하기</button>
        </div>
      </div>
      <div className="course-list-item">
        <div className="course-img">
          <img src={dessertImg} alt="디저트 코스" />
        </div>
        <div>
          <div className="course-title">디저트</div>
          <div className="course-desc">5성급 호텔 파티쉐가 되어보자 </div>
          <button className="btn-learn">지금 학습하기</button>
        </div>
      </div>
    </div>
  );
}

export default CourseList;
