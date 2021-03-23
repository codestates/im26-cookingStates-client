import React from "react";
import { withRouter } from "react-router-dom";

function MenuNav(props) {
  console.log("MENUNAV", props.RecipesInCourse);
  return (
    <>
      <div className="menu-Nav">
        <div>
          <div className="menu-Nav-Title"></div>
          {props.RecipesInCourse.map((item) => (
            <div className="menu-Nav-item">{item.title}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default withRouter(MenuNav);
