// 액션 타입
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const USER_LOGOUT = "USER_LOGOUT";
export const USER_REGISTER = "USER_REGISTER";
export const SET_USER_INFO = "SET_USER_INFO";
export const USER_UPDATE = "USER_UPDATE";
export const USER_UNREGISTER = "USER_UNREGISTER";

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    payload: accessToken,
  };
}

export function setUserInfo(userData) {
  return {
    type: SET_USER_INFO,
    payload: userData,
  };
}

export function updateUserInfo(userData) {
  return {
    type: USER_UPDATE,
    payload: userData,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
