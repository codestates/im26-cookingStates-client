import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Menu from "./Menu";
import "../pages/CSS/contents-menutitle.css";
import { useSelector } from "react-redux";

function Menutitle() {
  const currentRecipe = useSelector(
    (state) => state.recipeReducer.currentRecipe
  );
  console.log(currentRecipe);

  return (
    <>
      <Menu currentRecipe={currentRecipe} />
    </>
  );
}

export default withRouter(Menutitle);
