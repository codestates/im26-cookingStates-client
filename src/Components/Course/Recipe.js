import React from "react";
import recipeData from "../../recipe.json";

function Recipe(props) {
  return (
    <div>
      <div>요리 순서</div>
      <div>
        {recipeData[0].manual[0]}
        <img src={recipeData[0].manual[1]} alt="manualImg"></img>
      </div>
    </div>
  );
}

export default Recipe;
