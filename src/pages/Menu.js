import React, { useState, useEffect } from "react";
import Nutrition from "../Components/Course/Nutrition";
import "./CSS/Menu.css";
import { withRouter } from "react-router-dom";
import RecipeComponent from "../Components/Course/Recipe";
import MenuNav from "../Components/Course/MenuNav";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import API from "../api";
import { setUserInfo } from "../actions/user_action";

function Menu(props) {
  const currentRecipe = useSelector(
    (state) => state.recipeReducer.currentRecipe
  );
  const accessToken = useSelector((state) => state.userReducer.accessToken);
  const userInfo = useSelector((state) => state.userReducer.userInfo);
  const passedRecipes = userInfo.data.course.passedRecipes;
  const recentCourseId = currentRecipe[0].courseId;
  const recentCourseDif = currentRecipe[0].difficulty;
  const temp = [1, 2, 3, 4, 5];
  const curRecipeId = temp.map((el) => el + (recentCourseId * 5 - 5))[
    recentCourseDif - 1
  ]; //! 위험한 알고리즘...

  const dispatch = useDispatch();

  const [IsChecked, setIsChecked] = useState(
    passedRecipes.includes(curRecipeId)
  );

  useEffect(() => {
    axios
      .post(
        `${API.RECIPE_INFO}/${curRecipeId}/checked`,
        { isChecked: IsChecked }, //체크박스 상태
        {
          withCredentials: true,
          headers: { authorization: "Bearer " + accessToken },
        }
      )
      .then((res) => {
        return axios
          .get(API.USER_INFO, {
            withCredentials: true,
            headers: { authorization: "Bearer " + accessToken },
          })
          .then((user) => {
            dispatch(setUserInfo(user));
          });
      })
      .then((res) => {
        if (userInfo.data.course.passedRecipesOfRecentCourse.length === 5) {
          // body {email: ,    courseId: recentCourseId, isPassed: true }
          return axios.post(
            API.COMPLETE_COURSE,
            {
              email: userInfo.data.email,
              recentCourse: recentCourseId,
              isPassed: true,
            },
            {
              withCredentials: true,
              headers: { authorization: "Bearer " + accessToken },
            }
          );
        } else {
          return axios.post(
            API.COMPLETE_COURSE,
            {
              email: userInfo.data.email,
              recentCourse: recentCourseId,
              isPassed: false,
            },
            {
              withCredentials: true,
              headers: { authorization: "Bearer " + accessToken },
            }
          );
        }
      });
  }, [IsChecked]);

  if (currentRecipe) {
    return (
      <>
        <div className="menu-container">
          <MenuNav />
          <div className="menu-body">
            <div className="menu-title">{currentRecipe[0].title}</div>
            <div id="menu-recipe-info">
              <Nutrition recipe={currentRecipe[0]} />
              <div id="menu-ingredient">
                <div className="menu-ingredient-title">재료</div>
                <img
                  src={currentRecipe[0].image.small}
                  className="menu-ingredient-img"
                  alt=""
                />
                <div className="menu-ingredient-desc">
                  {currentRecipe[0].ingredient}
                </div>
              </div>
            </div>
            <div id="menu-recipe-list">
              <span className="menu-recipe-list-title">요리 순서</span>
              {currentRecipe[0]["manual"].map((step, idx) => (
                <RecipeComponent key={idx} step={step} />
              ))}
              <div className="complete-chk">
                <input
                  type="checkbox"
                  id="complete-chk"
                  className="recipe-chk"
                  checked={IsChecked}
                  onChange={(event) => {
                    setIsChecked(!IsChecked);
                  }}
                />
                <label htmlFor="complete-chk">요리 완성!</label>
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
