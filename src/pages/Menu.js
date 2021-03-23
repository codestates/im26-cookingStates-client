import React, { useState, useEffect } from "react";
import API from "../api";
import axios from "axios";
import Nutrition from "../Components/Course/Nutrition";
import "./CSS/Menu.css";
import { withRouter } from "react-router-dom";
import RecipeComponent from "../Components/Course/Recipe";
import MenuNav from "../Components/Course/MenuNav";

function Menu(props) {
  const [Recipe, setRecipe] = useState([]);
  console.log("^^^^^^", props.location.state.courseId);
  const [RecipesInCourse, setRecipiesInCourse] = useState([]);

  // 액션 생성 함수에 들어가는 부분
  const getRecipe = async (recipeId) => {
    await axios.get(API.RECIPE_DETAIL + `/${recipeId}`).then((res) => {
      setRecipe(res.data);
    });
  };

  const getRecipesInCourse = (courseId) => {
    axios.get(API.COURSE_DETAIL + `/${courseId}`).then((res) => {
      setRecipiesInCourse(res.data);
    });
  };

  useEffect(() => {
    const SEQ = props.location.pathname.split("/")[2];
    getRecipe(SEQ);
    getRecipesInCourse(props.location.state.courseId);
  }, []);

  if (Recipe.length > 0) {
    const recipe = Recipe[0];

    return (
      <>
        <div className="menu-container">
          <MenuNav RecipesInCourse={RecipesInCourse} />
          <div className="menu-body">
            <div className="menu-title">{recipe.title}</div>
            <div id="menu-recipe-info">
              <Nutrition recipe={recipe} />
              <div id="menu-ingredient">
                <div className="menu-ingredient-title">재료</div>
                <img
                  src={recipe.image.small}
                  className="menu-ingredient-img"
                  alt=""
                />
                <div className="menu-ingredient-desc">{recipe.ingredient}</div>
              </div>
            </div>
            <div id="menu-recipe-list">
              <span className="menu-recipe-list-title">요리 순서</span>
              {recipe["manual"].map((step) => (
                <RecipeComponent step={step} />
              ))}
              <div class="complete-chk">
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
