import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentRecipe } from "../../actions/recipe_action";

function MenuNav(props) {
  const courseInfo = useSelector((state) => state.courseReducer.courseInfo);
  const recipeInfo = useSelector((state) => state.recipeReducer.recipeInfo);

  const dispatch = useDispatch();

  const handleClick = (recipe) => {
    dispatch(setCurrentRecipe(recipe));
  };

  return (
    <>
      <div className="menu-Nav">
        <div>
          <div className="menu-Nav-Title">{courseInfo.title}</div>
          {recipeInfo &&
            recipeInfo.map((recipe) => {
              return (
                <div
                  className="menu-Nav-item"
                  onClick={() => {
                    let location = {
                      pathname: `/recipe/${recipe.id}`,
                      state: { courseId: props.courseId },
                    };
                    props.history.push(location);
                    handleClick(props.Recipe);
                  }}
                >
                  {recipe.title}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default withRouter(MenuNav);
