import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import "../../pages/CSS/content-coursetitle.css";
import axios from "axios";
import API from "../../api";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRecipeInfo } from "../../actions/recipe_action";

function MenuList(props) {
  const courseId = props.location.pathname.split("/")[2];
  const dispatch = useDispatch();

  const [Recipes, setRecipes] = useState([]);
  const [CourseId, setCourseId] = useState(courseId);
  useEffect(() => {
    getRecipes(CourseId);
  }, []);

  const getRecipes = (courseId) => {
    axios.get(API.COURSE_INFO + `/${courseId}`).then((res) => {
      setRecipes(res.data);
      dispatch(setRecipeInfo(res.data));
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
