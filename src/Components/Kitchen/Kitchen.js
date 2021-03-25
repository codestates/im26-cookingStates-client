import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../api";
import MedalList from "./MedalList";
import CompleteCourse from "./CompleteCourse";
import Profile from "./Profile";
import RecentMenu from "./RecentMenu";
import { useSelector, useDispatch } from "react-redux";
import { setAllCourseInfo } from "../../actions/course_action";

function Kitchen(props) {
  const UserData = useSelector((state) => state.userReducer.userInfo);
  const allCourseInfo = useSelector(
    (state) => state.courseReducer.allCourseInfo
  );
  const Dispatch = useDispatch();

  useEffect(() => {
    // if (CourseInfo) return;
    axios.get(API.COURSE_INFO).then((res) => {
      Dispatch(setAllCourseInfo(res.data));
    });
  }, []);

  return (
    <div className="kitchen">
      {UserData ? (
        <div className="kitchen-article">
          <div className="kitchen-article-header">
            <h1>My Kitchen</h1>
          </div>
          <div className="kitchen-article-contents">
            <Profile UserData={UserData} />
            <RecentMenu UserData={UserData} CourseInfo={allCourseInfo} />
            <MedalList UserData={UserData} />
            <CompleteCourse UserData={UserData} />
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default Kitchen;
