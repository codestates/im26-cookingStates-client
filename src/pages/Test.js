import React, { useEffect, useState } from "react";
import "./CSS/test.css";
import API from "../api";
import axios from "axios";
import { useSelector } from "react-redux";

function Test() {
  // const state = useSelector((state) => state.recipeReducer);
  const [Recipes, setRecipes] = useState([]);
  const [CustomRecipes, setCustomRecipes] = useState([]);
  const [Course, setCourse] = useState([]);
  const [Users, setUsers] = useState([]);
  const [CourseInRecipe, setCourseInRecipe] = useState([]);
  const [EditCoures, setEditCoures] = useState(false);
  const [Render, setRender] = useState(false);
  const [CurrentCourse, setCurrentCourse] = useState("");
  const accessToken = useSelector((state) => state.userReducer.accessToken);

  const permission = async (e, user, type) => {
    await axios({
      url: API.PERMISSION,
      method: "post",
      withCredentials: true,
      headers: {
        authorization: "Bearer " + accessToken,
      },
      data: {
        type: type,
        email: user.email,
      },
    })
      .then(async (res) => {
        user = await axios.get(API.ALL_USER, {
          // ! 수정하기
          withCredentials: true,
          headers: {
            authorization: "Bearer " + accessToken,
          },
        });
        setUsers(user.data.userInfo);
      })
      .catch((e) => {
        console.log("errer");
      });
  };

  useEffect(() => {
    axios
      .get(API.USER_INFO, {
        withCredentials: true,
        headers: {
          authorization: "Bearer " + accessToken,
        },
      })
      .then(async (res) => {
        if (res.data.type === "A") {
          await run();
          setRender(true);
        }
      });

    let recipe;
    let course;
    let user;
    // let customRecipe;  // ? 데이터 많아지면 localstroage 사용하기
    axios
      .get(API.CUSTOM_RECIPE_INFO)
      .then((res) => {
        setCustomRecipes(res.data);
      })
      .catch((e) => console.log(e));

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
        course = await axios.get(API.COURSE_INFO); // ? RDS 코스 데이터
        localStorage.setItem("Course", recipe);
        setCourse(course.data);
      }

      user = localStorage.getItem("User");
      if (Array.isArray(user) && user.length > 0) {
        setUsers(user.data);
      } else {
        user = await axios.get(API.ALL_USER, {
          withCredentials: true,
          headers: {
            authorization: "Bearer " + accessToken,
          },
        });
        localStorage.setItem("User", user.data.userInfo);
        setUsers(user.data.userInfo);
      }
    };

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
    <div className="test-page-wrapper">
      {Render ? (
        <div className="test-page">
          <h1>관리자 용 페이지 입니다</h1>
          <label>레시피 관리</label>
          <section className="recipe-section">
            <div>
              <h2>기본 레시피 리스트</h2>
              {Recipes.map((recipe) => {
                return <div key={recipe.id}>{recipe.title}</div>;
              })}
            </div>
            <div>
              <h2>커스텀 레시피 리스트</h2>
              {CustomRecipes.map((recipe) => {
                return (
                  <div>
                    <div>{recipe.title}</div>
                  </div>
                );
              })}
            </div>
          </section>

          <label>코스 관리</label>
          <section className="course-section">
            <div>
              <h2>
                코스 리스트
                {EditCoures ? (
                  <button onClick={editCourseHandler}>취소</button>
                ) : (
                  <button onClick={editCourseHandler}>코스 추가하기</button>
                )}
              </h2>
              {EditCoures && (
                <div className="course-add">
                  코스 이름 : <input id="course-input-name" type="text"></input>
                  코스 소개 : <input id="course-input-dsc" type="text"></input>
                  {/* <button // ! 기능 봉인
                    onClick={() => {
                      const courseName = document.querySelector(
                        "#course-input-name"
                      ).value;
                      const courseDsc = document.querySelector(
                        "#course-input-dsc"
                      ).value;
                      if (courseName && courseDsc) {
                        document.querySelector("#course-input-name").value = "";
                        document.querySelector("#course-input-dsc").value = "";
                        axios
                          .post("http://localhost:4000/course", {
                            // ! 수정하기
                            courseName: courseName,
                            courseDiscription: courseDsc,
                          })
                          .then((res) => {
                            axios
                              .get("http://localhost:4000/course") // ! 수정하기
                              .then((res) => {
                                setCourse(res.data);
                              });
                          });
                      } else {
                        alert("입력값을 모두 적어주세요!");
                      }
                    }}
                  >
                    추가
                  </button> */}
                </div>
              )}
              {Course.map((course) => {
                return (
                  <div
                    className="course-item"
                    key={course.id}
                    onClick={async () => {
                      const result = await axios.get(
                        API.COURSE_DETAIL + `/${course.id}` // ? RDS 코스 디테일 데이터
                      );
                      setCourseInRecipe(result.data);
                      setCurrentCourse(course.title);
                    }}
                  >
                    {course.title}
                  </div>
                );
              })}
            </div>
            <div>
              <h2>코스 상세 데이터 : {CurrentCourse}</h2>

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
            {/* <div> // ! 기능 봉인
              {CurrentCourse && (
                <h2>
                  코스 수정하기
                  <button>코스 레시피 추가하기</button>
                  <button>코스 레시피 삭제하기</button>
                </h2>
              )}
            </div> */}
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
                        {user.type === "A" ? (
                          <button
                            onClick={(e) => {
                              permission(e, user, "U");
                            }}
                          >
                            관리자 권한 회수하기
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              permission(e, user, "A");
                            }}
                          >
                            관리자 권한 주기
                          </button>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </section>
        </div>
      ) : (
        <h1>관리자 계정만 접근할 수 있습니다</h1>
      )}
    </div>
  );
}

export default Test;
