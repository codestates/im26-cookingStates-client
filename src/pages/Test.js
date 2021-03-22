import React, { useEffect, useState } from "react";
import "./CSS/test.css";
import API from "../api";
import axios from "axios";
// import { useSelector } from "react-redux";

function Test() {
  // const state = useSelector((state) => state.recipeReducer);
  const [Recipes, setRecipes] = useState([]);
  const [Course, setCourse] = useState([]);
  const [EditCoures, setEditCoures] = useState(false);
  useEffect(() => {
    let recipe;
    let course;
    const run = async () => {
      recipe = localStorage.getItem("Recipe");
      if (Array.isArray(recipe) && recipe.length > 0) {
        setRecipes(recipe.data);
      } else {
        recipe = await axios.get(API.RECIPE_INFO);
        localStorage.setItem("Recipe", recipe);
        setRecipes(recipe.data);
      }

      course = localStorage.getItem("Course");
      if (Array.isArray(course) && course.length > 0) {
        setCourse(course.data);
      } else {
        course = await axios.get(API.COURSE_INFO);
        localStorage.setItem("Course", recipe);
        setCourse(course.data);
      }
    };
    run();
    return () => {
      setRecipes([]);
      setCourse([]);
    };
  }, []);

  const editCourseHandler = () => {
    setEditCoures(!EditCoures);
  };

  return (
    <div className="test-page">
      <h1>테스트 용 페이지 입니다</h1>

      <label>레시피 관리</label>
      <section className="recipe-section">
        <div>
          <h4>레시피 리스트</h4>
          {Recipes.map((recipe) => {
            return <div key={recipe.id}>{recipe.title}</div>;
          })}
        </div>
      </section>

      <label>코스 관리</label>
      <section className="course-section">
        <div>
          <h4>
            코스 리스트
            {EditCoures ? (
              <button onClick={editCourseHandler}>취소</button>
            ) : (
              <button onClick={editCourseHandler}>코스 추가하기</button>
            )}
          </h4>
          {EditCoures && (
            <div className="course-add">
              코스 이름 : <input type="text"></input>
              <button>추가</button>
            </div>
          )}
          {Course.map((course) => {
            return (
              <div className="course-item" key={course.id}>
                {course.title}
              </div>
            );
          })}
        </div>
      </section>

      <label>유저 관리</label>
      <section>
        <div>유저 목록</div>
      </section>
    </div>
  );
}

export default Test;
