import React from "react";
import Nutrition from "../Components/Course/Nutrition";
import "./CSS/Menu.css";
import { withRouter } from "react-router-dom";
import RecipeComponent from "../Components/Course/Recipe";
import MenuNav from "../Components/Course/MenuNav";
import { useSelector } from "react-redux";

function Menu(props) {
  const currentRecipe = useSelector(
    (state) => state.recipeReducer.currentRecipe
  );

  if (currentRecipe) {
    return (
      <>
        <div className="menu-container">
          <MenuNav />
          <div className="menu-body">
            <div className="menu-title">{currentRecipe[0].title}</div>
            <div id="menu-recipe-info">
              <Nutrition recipe={currentRecipe[0]} />
              <div id="menu-ingredient">
                <div className="menu-ingredient-title">재료</div>
                <img
                  src={currentRecipe[0].image.small}
                  className="menu-ingredient-img"
                  alt=""
                />
                <div className="menu-ingredient-desc">
                  {currentRecipe[0].ingredient}
                </div>
              </div>
            </div>
            <div id="menu-recipe-list">
              <span className="menu-recipe-list-title">요리 순서</span>
              {currentRecipe[0]["manual"].map((step) => (
                <RecipeComponent step={step} />
              ))}
              <div className="complete-chk">
                <input type="checkbox" id="complete-chk"></input>
                <label for="complete-chk">요리 완성!</label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
}

export default withRouter(Menu);
