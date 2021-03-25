import axios from "axios";
import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentRecipe } from "../../actions/recipe_action";
import API from "../../api";

function MenuCard(props) {
  const dispatch = useDispatch();
  const getRecipe = async (recipeId) => {
    await axios.get(API.RECIPE_DETAIL + `/${recipeId}`).then((res) => {
      dispatch(setCurrentRecipe(res.data));
    });
  };
  const diff = Number(props.recipe.difficulty);
  let star = "✰".repeat(diff);

  return (
    <div
      className="menu-card"
      onClick={() => {
        getRecipe(props.recipe.id);
        let location = {
          pathname: `/recipe/${props.recipe.id}`,
          state: { courseId: props.courseId },
        };
        props.history.push(location);
      }}
    >
      <div className="recipe-img">
        <img src={props.recipe.image.small} alt="" />
      </div>
      <div className="recipe-content">
        <div className="recipe-title">{props.recipe.title}</div>
        <div className="recipe-diff">{star}</div>
      </div>
    </div>
  );
}

export default withRouter(MenuCard);
