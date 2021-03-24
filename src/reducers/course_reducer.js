import { SET_COURSE_INFO } from "../actions/course_action";

export default function courseReducer(state = {}, action) {
  // 코스 id, title,image, description 전달

  switch (action.type) {
    case SET_COURSE_INFO:
      return { ...state, courseInfo: action.payload };

    default:
      return state;
  }
}
