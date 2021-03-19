import React, { useState, useEffect } from 'react';
import MenuCard from './MenuCard';
import '../../pages/CSS/content-coursetitle.css';
import axios from 'axios';
import API from '../../api';

function MenuList() {
  const [Recipes, setRecipes] = useState([]);
  const [CourseId, setCourseId] = useState(1); // ! state로 하지 않고 props로 받아와야 함

  useEffect(() => {
    getRecipes(CourseId);
    //console.log(Recipes);
  }, []);

  const getRecipes = (courseId) => {
    axios.get(API.COURSE_INFO + `/${courseId}`).then((res) => {
      //console.log(res.data);
      setRecipes(res.data);
    });
  };

  return (
    <div className="menu-list">
      {Recipes.map((recipe) => (
        <MenuCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}

export default MenuList;
