// 액션 타입
export const SET_RECIPE_INFO = "SET_RECIPE_INFO";

export function setRecipeInfo(recipeInfo) {
  return {
    type: SET_RECIPE_INFO,
    payload: recipeInfo,
  };
}
