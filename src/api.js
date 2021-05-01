const port = 4000;

const API = {
  USER_LOGIN: `https://server.cookingstates.site:${port}/user/login`,
  USER_LOGOUT: `https://server.cookingstates.site:${port}/user/logout`,
  USER_REGISTER: `https://server.cookingstates.site:${port}/user/register`,
  USER_INFO: `https://server.cookingstates.site:${port}/user/info`,
  EMAIL_CHECK: `https://server.cookingstates.site:${port}/user/checkemail`,
  USER_UPDATE: `https://server.cookingstates.site:${port}/user/update`,
  USER_UNREGISTER: `https://server.cookingstates.site:${port}/user/unregister`,
  PERMISSION: `https://server.cookingstates.site:${port}/user/permission`,
  ALL_USER: `https://server.cookingstates.site:${port}/user/all`,

  COURSE_INFO: `https://server.cookingstates.site:${port}/course`,
  COURSE_DETAIL: `https://server.cookingstates.site:${port}/course`, // /:id
  ADD_COURSE: `https://server.cookingstates.site:${port}/course`,
  COMPLETE_COURSE: `https://server.cookingstates.site:${port}/course/complete`,

  RECIPE_INFO: `https://server.cookingstates.site:${port}/recipe`,
  CUSTOM_RECIPE_INFO: `https://server.cookingstates.site:${port}/recipe/custom/list`,
  CUSTOM_RECIPE_UPLOAD: `https://server.cookingstates.site:${port}/recipe/upload`,
  RECIPE_DETAIL: `https://server.cookingstates.site:${port}/recipe`, // /:id
  RECIPE_UPLOAD: `https://server.cookingstates.site:${port}/recipe/upload`,
  RECIPE_CHECKED: `https://server.cookingstates.site:${port}/recipe/:id/checked`,

  TOKEN_ACCESS: `https://server.cookingstates.site:${port}/token/access`,
  TOKEN_REFRESH: `https://server.cookingstates.site:${port}/token/refresh`,

  OAUTH_GOOGLE: `https://server.cookingstates.site:${port}/oauth/google`,
  OAUTH_KAKAO: `https://server.cookingstates.site:${port}/oauth/kakao`,
};

export default API;
