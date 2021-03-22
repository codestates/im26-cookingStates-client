// 액션 타입
export const GET_RECIPE_INFO = "GET_RECIPE_INFO";

export function getRecipeInfo(recipeInfo) {
  return {
    type: GET_RECIPE_INFO,
    payload: recipeInfo,
  };
}
