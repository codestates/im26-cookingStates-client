import React from "react";
import ReactDOM from "react-dom";
import "./CSS/index.css";
import "./CSS/Nav.css";
// import App from "./App";
import Nav from "./Components/Nav";
import CourseList from "./Components/Index/CourseList";

ReactDOM.render(
  /* 로그아웃 상태 */
  <>
    <Nav />
    <CourseList />
  </>,
  document.getElementById("root")
);
