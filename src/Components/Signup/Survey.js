import React from "react";
import "../../pages/CSS/survey.css";

function Survey(props) {
  return (
    <div className="survey-box">
      <div className="survey-title"> 쉐프님의 요리 레벨 테스트!</div>
      <div className="survey-group">
        <div className="question">
          <input id="ckb1" type="checkbox" value="TRUE"></input>
          <label for="ckb1"> 진간장과 양조간장의 차이를 알고 있다.</label>
        </div>
        <div className="question">
          <input id="ckb2" type="checkbox" value="TRUE"></input>
          <label for="ckb2">라면 말고 할 수 있는 요리가 2가지 이상이다.</label>
        </div>
      </div>
      <div className="question">
        <input id="ckb3" type="checkbox" value="TRUE"></input>
        <label for="ckb3">
          주 3회 이상 온오프라인을 통해서 식재료를 구매한다.
        </label>
      </div>
      <div className="question">
        <label>
          감동란 반숙을 만들기 위해서는 물이 끓은 후 약
          <input type="text"></input>분 동안 달걀을 삶아야한다.
        </label>
      </div>
      <div className="question">
        <input id="ckb4" type="checkbox" value="TRUE"></input>
        <label for="ckb4">
          백종원 선생님의 레시피를 참고해서 직접 요리를 만들어본 적이 있다.
        </label>
      </div>
      <button type="submit">가입 완료하기</button>
    </div>
  );
}

export default Survey;
