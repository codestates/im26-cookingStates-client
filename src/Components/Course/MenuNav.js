import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function MenuNav(props) {
  const courseInfo = useSelector((state) => state.courseReducer.courseInfo);
  const recipeInfo = useSelector((state) => state.recipeReducer.recipeInfo);

  return (
    <>
      <div className="menu-Nav">
        <div>
          <div className="menu-Nav-Title">{courseInfo.title}</div>
          {recipeInfo &&
            recipeInfo.map((recipe) => {
              return <div className="menu-Nav-item">{recipe.title}</div>;
            })}
        </div>
      </div>
    </>
  );
}

export default withRouter(MenuNav);
