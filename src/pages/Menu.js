import React, { useState, useEffect } from "react";
import API from "../api";
import axios from "axios";
import Nutrition from "../Components/Course/Nutrition";
import "./CSS/Menu.css";
import { withRouter } from "react-router-dom";
import RecipeComponent from "../Components/Course/Recipe";
import MenuNav from "../Components/Course/MenuNav";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentRecipe } from "../actions/recipe_action";

function Menu(props) {
  const [Recipe, setRecipe] = useState([]);
  const currentRecipe = useSelector(
    (state) => state.recipeReducer.currentRecipe
  );

  // 액션 생성 함수에 들어가는 부분
  const getRecipe = async (recipeId) => {
    await axios.get(API.RECIPE_DETAIL + `/${recipeId}`).then((res) => {
      setRecipe(res.data);
      dispatch(setCurrentRecipe(res.data));
    });
  };

  useEffect(() => {
    const SEQ = props.location.pathname.split("/")[2];
    getRecipe(SEQ);
  }, [currentRecipe]);

  const dispatch = useDispatch();

  if (props.currentRecipe) {
    return (
      <>
        <div className="menu-container">
          <MenuNav Recipe={Recipe} />
          <div className="menu-body">
            <div className="menu-title">{props.currentRecipe[0].title}</div>
            <div id="menu-recipe-info">
              <Nutrition recipe={props.currentRecipe[0]} />
              <div id="menu-ingredient">
                <div className="menu-ingredient-title">재료</div>
                <img
                  src={props.currentRecipe[0].image.small}
                  className="menu-ingredient-img"
                  alt=""
                />
                <div className="menu-ingredient-desc">
                  {props.currentRecipe[0].ingredient}
                </div>
              </div>
            </div>
            <div id="menu-recipe-list">
              <span className="menu-recipe-list-title">요리 순서</span>
              {props.currentRecipe[0]["manual"].map((step) => (
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
