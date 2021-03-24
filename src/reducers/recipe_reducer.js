import { SET_RECIPE_INFO, SET_CURRENT_RECIPE } from "../actions/recipe_action";

export default function recipeReducer(state = {}, action) {
  // 새로운 state에 recipe 정보 담아서 반환

  switch (action.type) {
    case SET_RECIPE_INFO:
      return { ...state, recipeInfo: action.payload };

    case SET_CURRENT_RECIPE:
      return { ...state, currentRecipe: action.payload };
    default:
      return state;
  }
}
