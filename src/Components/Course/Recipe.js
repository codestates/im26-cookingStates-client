import React from "react";
import "../../pages/CSS/Menu.css";

function Recipe(props) {
  const errorHandler = (e) => {
    document.querySelector("#API-recipe-image").classList.add("display-none");
  };

  for (let i = 0; i < props.step.length; i++) {
    return (
      <>
        <div className="recipe-desc">{props.step[0]}</div>
        <img
          id="API-recipe-image"
          src={props.step[1]}
          className="recipe-img"
          onError={errorHandler}
          alt=""
        ></img>
      </>
    );
  }
}

export default Recipe;
