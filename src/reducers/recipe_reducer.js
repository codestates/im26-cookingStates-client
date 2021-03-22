import { GET_RECIPE_INFO } from "../actions/recipe_action";

export default function recipe(state = {}, action) {
  // 새로운 state를 만들어 반환

  switch (action.type) {
    case GET_RECIPE_INFO:
      return { ...state, recipeInfo: action.payload };
    default:
      return state;
  }
}
