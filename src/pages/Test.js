import React, { useEffect, useState } from "react";
import "./CSS/test.css";
import API from "../api";
import axios from "axios";
import { useSelector } from "react-redux";

function Test() {
  // const state = useSelector((state) => state.recipeReducer);
  const [Recipes, setRecipes] = useState([]);
  const [Course, setCourse] = useState([]);
  const [Users, setUsers] = useState([]);
  const [CourseInRecipe, setCourseInRecipe] = useState([]);
  const [EditCoures, setEditCoures] = useState(false);
  const accessToken = useSelector((state) => state.userReducer.accessToken);

  useEffect(() => {
    let recipe;
    let course;
    let user;
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
        course = await axios.get("http://localhost:4000/course");
        localStorage.setItem("Course", recipe);
        setCourse(course.data);
      }

      user = localStorage.getItem("User");
      if (Array.isArray(user) && user.length > 0) {
        setUsers(user.data);
      } else {
        user = await axios.get("http://localhost:4000/user/all", {
          withCredentials: true,
          headers: {
            authorization: "Bearer " + accessToken,
          },
        });
        localStorage.setItem("User", user.data.userInfo);
        setUsers(user.data.userInfo);
      }
    };
    run();
    return () => {
      setRecipes([]);
      setCourse([]);
      setUsers([]);
    };
  }, []);

  const editCourseHandler = () => {
    setEditCoures(!EditCoures);
  };

  return (
    <div className="test-page">
      <h1>관리자 용 페이지 입니다</h1>

      <label>레시피 관리</label>
      <section className="recipe-section">
        <div>
          <h4>기본 레시피 리스트</h4>
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
              코스 이름 : <input id="course-input-name" type="text"></input>
              코스 소개 : <input id="course-input-dsc" type="text"></input>
              <button
                onClick={() => {
                  const courseName = document.querySelector(
                    "#course-input-name"
                  ).value;
                  const courseDsc = document.querySelector("#course-input-dsc")
                    .value;
                  if (courseName && courseDsc) {
                    document.querySelector("#course-input-name").value = "";
                    document.querySelector("#course-input-dsc").value = "";
                    axios
                      .post("http://localhost:4000/course", {
                        courseName: courseName,
                        courseDiscription: courseDsc,
                      })
                      .then((res) => {
                        axios
                          .get("http://localhost:4000/course")
                          .then((res) => {
                            setCourse(res.data);
                          });
                        console.log("결과: ", res);
                      });
                  } else {
                    alert("입력값을 모두 적어주세요!");
                  }
                }}
              >
                추가
              </button>
            </div>
          )}
          {Course.map((course) => {
            return (
              <div
                className="course-item"
                key={course.id}
                onClick={async () => {
                  const result = await axios.get(
                    `http://localhost:4000/course/${course.id}`
                  );
                  setCourseInRecipe(result.data);
                }}
              >
                {course.title}
              </div>
            );
          })}
        </div>
        <div>
          <h4>코스 상세 데이터</h4>
          {CourseInRecipe.length > 0 ? (
            <div>
              {CourseInRecipe.map((recipe) => {
                return <div>{recipe.title}</div>;
              })}
            </div>
          ) : (
            <div>코스에 레시피가 없습니다 ㅠ</div>
          )}
        </div>
      </section>

      <label>유저 관리</label>
      <section className="user-section">
        <div>
          유저 목록
          <div className="user-list">
            {Users &&
              Users.map((user) => {
                return (
                  <div className="user-item" key={user.id}>
                    <div>user name : {user.userName}</div>
                    <div>email : {user.email}</div>
                    <div>bio : {user.bio}</div>
                    {/* <div>{user.}</div>
                    <div>{user.userName}</div> */}
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Test;
