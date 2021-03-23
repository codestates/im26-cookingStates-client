import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Menu from "./Menu";
import "../pages/CSS/contents-menutitle.css";
import axios from "axios";
import API from "../api";

function Menutitle() {
  const [Course, setCourse] = useState([]);

  // const getCourse = async (courseId) => {
  //   await axios.get(API.COURSE_);
  // };

  return (
    <>
      <Menu />
    </>
  );
}

export default withRouter(Menutitle);
