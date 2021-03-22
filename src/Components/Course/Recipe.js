import React from "react";
import "../../pages/CSS/Menu.css";

function Recipe(props) {
  for (let i = 0; i < props.step.length; i++) {
    return (
      <>
        <div className="recipe-desc">{props.step[0]}</div>
        <img src={props.step[1]} className="recipe-img" alt="manualImg"></img>
      </>
    );
  }
}

export default Recipe;
