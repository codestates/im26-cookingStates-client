import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";

function MenuCard(props) {
  console.log(props);

  return (
    <div
      className="menu-card"
      onClick={() => {
        props.history.push(`/recipe/${props.recipe.id}`);
        let location = {
          pathname: `/recipe/${props.recipe.id}`,
          state: { courseId: props.courseId },
        };
        props.history.push(location);
      }}
    >
      <div className="recipe-img">
        <img src={props.recipe.image.small} alt="" />
      </div>
      <div className="recipe-content">
        <div className="recipe-title">{props.recipe.title}</div>
      </div>
    </div>
  );
}

export default withRouter(MenuCard);
