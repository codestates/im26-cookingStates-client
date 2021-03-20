import React, { useState, useEffect } from 'react';
import API from '../../api';
import axios from 'axios';

function Menu(props) {
  const [Recipe, setRecipe] = useState({});

  // 액션 생성 함수에 들어가는 부분
  const getRecipe = (recipeId) => {
    axios.get(API.RECIPE_DETAIL + `/${recipeId}`).then((res) => {
      //console.log(res.data);
      setRecipe(res.data);
    });
  };

  return <div></div>;
}

export default Menu;
