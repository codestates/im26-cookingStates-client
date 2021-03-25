import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../api";
import MedalList from "./MedalList";
import CompleteCourse from "./CompleteCourse";
import Profile from "./Profile";
import RecentMenu from "./RecentMenu";
import { useSelector } from "react-redux";

function Kitchen(props) {
  const UserData = useSelector((state) => state.userReducer.userInfo);
  const [CourseInfo, setCourseInfo] = useState([]);

  useEffect(() => {
    axios.get(API.COURSE_INFO).then((res) => {
      setCourseInfo(res.data);
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
            <RecentMenu UserData={UserData} CourseInfo={CourseInfo} />
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
