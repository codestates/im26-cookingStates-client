import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../../api";
import MedalList from "./MedalList";
import CompleteCourse from "./CompleteCourse";
import Profile from "./Profile";
import RecentMenu from "./RecentMenu";
import { useSelector } from "react-redux";

function Kitchen(props) {
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const [UserData, setUserData] = useState({});

  useEffect(() => {
    getUserInfo();
    return () => {};
  }, []);

  const getUserInfo = () => {
    axios
      .get(API.USER_INFO, {
        withCredentials: true,
        headers: {
          authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        setUserData(res.data);
      });
  };

  return (
    <div className="kitchen">
      <div className="kitchen-article">
        <div className="kitchen-article-header">
          <h1>My Kitchen</h1>
        </div>
        <div className="kitchen-article-contents">
          <Profile UserData={UserData} />
          <RecentMenu />
          <MedalList />
          <CompleteCourse />
        </div>
      </div>
    </div>
  );
}

export default Kitchen;
