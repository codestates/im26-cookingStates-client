import { withRouter } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./CSS/CustomRecipe.css";
import axios from "axios";
import API from "../api";

function CustomRecipe() {
  const userInfo = useSelector((state) => state.userReducer.userInfo);

  const [inputs, setInputs] = useState({
    title: "",
    file: "",
    difficulty: "",
    type: "",
    manual: "",
  });
  console.log(userInfo.data.email);

  const onChangeHandler = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <div className="custom-recipe-page">
      <h1>커스텀 레시피 등록 페이지</h1>
      <div className="input-box">
        <label>
          요리 제목 :
          <input
            type="text"
            name="title"
            onChange={onChangeHandler}
            value={inputs.title}
          ></input>
        </label>

        <label>
          이미지 등록하기 :
          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={(e) => {
              const file = e.target.files[0];
              setInputs({
                ...inputs,
                file: file,
              });
              const reader = new FileReader();
              reader.readAsDataURL(file);

              reader.onload = function () {
                let photoFrame = document.createElement("div");

                photoFrame.style = `background : url(${reader.result}); background-size : cover`;
                photoFrame.className = "photoFrame";
                document.getElementById("pictures").appendChild(photoFrame);
                e.target.value = "";

                photoFrame.addEventListener("click", function () {
                  document.getElementById("pictures").removeChild(photoFrame);
                });
              };
            }}
          ></input>
        </label>
        <div id="pictures"></div>

        <label>
          요리 난이도 :
          <input
            min="1"
            max="5"
            type="number"
            name="difficulty"
            onChange={onChangeHandler}
            value={inputs.difficulty}
          ></input>
        </label>

        <label>
          요리 타입 :
          <input
            type="text"
            name="type"
            onChange={onChangeHandler}
            value={inputs.type}
          ></input>
        </label>

        <label>
          요리 방법 :
          <textarea
            cols="30"
            rows="4"
            name="manual"
            value={inputs.manual}
            onChange={onChangeHandler}
          ></textarea>
        </label>
        <button
          onClick={() => {
            if (inputs.manual && inputs.title && inputs.type) {
              const formData = new FormData();
              formData.append("file", inputs.file);
              let temp = Object.assign(
                {},
                {
                  ...inputs,
                  author: userInfo.data.userName,
                  email: userInfo.data.email,
                }
              );
              delete temp.file;
              console.log(temp);
              formData.append("data", JSON.stringify(temp));
              axios
                .post(API.CUSTOM_RECIPE_UPLOAD, formData, {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                })
                .then((res) => {
                  setInputs({
                    title: "",
                    file: "",
                    difficulty: "",
                    type: "",
                    manual: "",
                  });
                })
                .catch((e) => {
                  console.log("error!", e);
                });
            } else {
              alert("데이터를 모두 입력해주세요");
            }
          }}
        >
          등록하기
        </button>
        <form></form>
      </div>
    </div>
  );
}

export default withRouter(CustomRecipe);
