import React from "react";
import { withRouter } from "react-router-dom";
import Menu from "./Menu";
import "../pages/CSS/contents-menutitle.css";

function Menutitle(props) {
  return (
    <>
      <Menu />
    </>
  );
}

export default withRouter(Menutitle);
