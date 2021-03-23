import { GET_COURSE_INFO } from "../actions/course_action";

export default function courseReducer(state = {}, action) {
  // 새로운 state를 만들어 반환

  switch (action.type) {
    case GET_COURSE_INFO:
      return { ...state, courseInfo: action.payload };
    default:
      return state;
  }
}
