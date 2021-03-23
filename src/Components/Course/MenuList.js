import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import "../../pages/CSS/content-coursetitle.css";
import axios from "axios";
import API from "../../api";
import { withRouter } from "react-router-dom";

function MenuList(props) {
  const courseId = props.location.pathname.split("/")[2];

  const [Recipes, setRecipes] = useState([]);
  const [CourseId, setCourseId] = useState(courseId);
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
        <MenuCard recipe={recipe} key={recipe.id} courseId={CourseId} />
      ))}
    </div>
  );
}

export default withRouter(MenuList);
