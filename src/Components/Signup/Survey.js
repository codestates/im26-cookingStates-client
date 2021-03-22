import React, { useState } from "react";
import "../../pages/CSS/survey.css";
import { Link, withRouter } from "react-router-dom";

function Survey(props) {
  const [Score, setScore] = useState(0);

  const onChangeHandler = (e) => {
    if (e.target.checked) {
      setScore(Score + 1);
    } else {
      setScore(Score - 1);
    }
  };

  return (
    <div className="survey-box">
      <h1>🎉 회원가입을 축하합니다 🎉</h1>
      <div className="survey-title"> 쉐프님의 요리 레벨 테스트!</div>
      <div className="survey-group">
        <div className="question">
          <input id="ckb1" type="checkbox" onChange={onChangeHandler}></input>
          <label for="ckb1"> 진간장과 양조간장의 차이를 알고 있다.</label>
        </div>
        <div className="question">
          <input id="ckb2" type="checkbox" onChange={onChangeHandler}></input>
          <label for="ckb2">라면 말고 할 수 있는 요리가 2가지 이상이다.</label>
        </div>
      </div>
      <div className="question">
        <input id="ckb3" type="checkbox" onChange={onChangeHandler}></input>
        <label for="ckb3">
          주 3회 이상 온오프라인을 통해서 식재료를 구매한다.
        </label>
      </div>
      <div className="question">
        <label>
          계란 반숙을 만들기 위해서는 물이 끓은 후 약
          <input className="eggScore" type="number"></input>분 동안 달걀을
          삶아야한다.
        </label>
      </div>
      <div className="question">
        <input id="ckb4" type="checkbox" onChange={onChangeHandler}></input>
        <label for="ckb4">
          백종원 선생님의 레시피를 참고해서 직접 요리를 만들어본 적이 있다.
        </label>
      </div>
      <br />
      <br />
      <button
        onClick={() => {
          let location = {
            pathname: "/welcome",
            state: { score: Score },
          };
          if (
            [7, 8].includes(Number(document.querySelector(".eggScore").value))
          ) {
            location.state.score += 1;
          }
          props.history.push(location);
        }}
      >
        레벨 테스트 완료
      </button>
    </div>
  );
}

export default withRouter(Survey);
