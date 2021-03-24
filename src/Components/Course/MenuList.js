import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import "../../pages/CSS/content-coursetitle.css";
import axios from "axios";
import API from "../../api";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setRecipeInfo } from "../../actions/recipe_action";

function MenuList(props) {
  const dispatch = useDispatch();
  const recipeInfo = useSelector((state) => state.recipeReducer.recipeInfo);
  const [CourseId, setCourseId] = useState("");

  useEffect(() => {
    const run = async () => {
      const courseId = props.location.pathname.split("/")[2];
      setCourseId(courseId);
      await axios.get(API.COURSE_INFO + `/${courseId}`).then((res) => {
        dispatch(setRecipeInfo(res.data)); // 코스안에 레시피 정보들을 담는다.
      });
    };
    run();
  }, []);

  return (
    <div className="menu-list">
      {recipeInfo &&
        recipeInfo.map((recipe) => (
          <MenuCard recipe={recipe} key={recipe.id} courseId={CourseId} />
        ))}
    </div>
  );
}

export default withRouter(MenuList);
