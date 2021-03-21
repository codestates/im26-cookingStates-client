import React from "react";
import { withRouter } from "react-router-dom";

function MenuCard(props) {
  console.log(props);

  return (
    <div
      className="menu-card"
      onClick={() => {
        props.history.push(`/recipe/${props.recipe.id}`);
      }}
    >
      <div className="recipe-img">
        <img src={props.recipe.image.small} alt="" />
      </div>
      <div>
        <div className="recipe-title">{props.recipe.title}</div>
      </div>
    </div>
  );
}

export default withRouter(MenuCard);
