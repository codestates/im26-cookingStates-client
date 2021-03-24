import { withRouter } from "react-router-dom";
import { useState } from "react";
import "./CSS/CustomRecipe.css";

function CustomRecipe() {
  const [Title, setTitle] = useState("");
  const [Difficulty, setDifficulty] = useState("");
  const [Manual, setManual] = useState([]);
  const [FoodImage, setFoodImage] = useState("");
  const [Type, setType] = useState("");

  return (
    <div className="custom-recipe-page">
      <h1>커스텀 레시피 등록 페이지</h1>
      <form>
        <label>
          요리 제목 :
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={Title}
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
            onChange={(e) => setDifficulty(e.target.value)}
            value={Difficulty}
          ></input>
        </label>

        <label>
          요리 타입 :
          <input
            type="text"
            name="type"
            onChange={(e) => setType(e.target.value)}
            value={Type}
          ></input>
        </label>

        <label>
          요리 방법 :<input type="text" name="type"></input>
        </label>
        <button>요리방법 추가하기</button>
        <button type="submit">등록하기</button>
      </form>
    </div>
  );
}

export default withRouter(CustomRecipe);
