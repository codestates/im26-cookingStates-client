import React, { useState, useEffect } from "react";
import API from "../../api";
import axios from "axios";
import Nutrition from "./Nutrition";
import Recipe from "./Recipe";
import recipeData from "../../recipe.json";

function Menu(props) {
  const [Recipe, setRecipe] = useState({});

  // 액션 생성 함수에 들어가는 부분
  const getRecipe = (recipeId) => {
    axios.get(API.RECIPE_DETAIL + `/${recipeId}`).then((res) => {
      //console.log(res.data);
      setRecipe(res.data);
    });
  };

  return (
    <div>
      <span className="menu-title">{recipeData[0].title}</span>
      <Nutrition />
      <h2 className="menu-ingredient">재료</h2>
      <div className="menu-ingredient">
        {recipeData[0].ingredient}
        <img
          className="menu-ingredient"
          src={recipeData[0].image.large}
          alt="imgIngredient"
        />
      </div>
      <div>요리 순서</div>
      <div>
        {recipeData[0].manual[0][0]}
        <img src={recipeData[0].manual[0][1]} alt="manualImg"></img>
      </div>
      <div>
        {recipeData[0].manual[1][0]}
        <img src={recipeData[0].manual[1][1]} alt="manualImg"></img>
      </div>
      <div>
        {recipeData[0].manual[2][0]}
        <img src={recipeData[0].manual[2][1]} alt="manualImg"></img>
      </div>
      <div>
        {recipeData[0].manual[3][0]}
        <img src={recipeData[0].manual[3][1]} alt="manualImg"></img>
      </div>
      <div>
        {recipeData[0].manual[4][0]}
        <img src={recipeData[0].manual[4][1]} alt="manualImg"></img>
      </div>
      <div>
        {recipeData[0].manual[5][0]}
        <img src={recipeData[0].manual[5][1]} alt="manualImg"></img>
      </div>
    </div>
  );
}

export default Menu;
