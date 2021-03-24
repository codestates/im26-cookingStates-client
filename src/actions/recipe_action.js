// 액션 타입
export const SET_RECIPE_INFO = "SET_RECIPE_INFO";
export const SET_CURRENT_RECIPE = "SET_CURRENT_RECIPE";

export function setRecipeInfo(recipeInfo) {
  return {
    type: SET_RECIPE_INFO,
    payload: recipeInfo,
  };
}

export function setCurrentRecipe(currentRecipe) {
  return {
    type: SET_CURRENT_RECIPE,
    payload: currentRecipe,
  };
}
