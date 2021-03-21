import axios from 'axios';
import API from '../api';

// 액션 타입
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_REGISTER = 'USER_REGISTER';
export const USER_INFO = 'USER_INFO';
export const USER_UPDATE = 'USER_UPDATE';
export const USER_UNREGISTER = 'USER_UNREGISTER';

export function userLogin(body) {
  const accessToken = axios.post(API.USER_LOGIN, body, { withCredentials: true }).then((res) => res.data);

  return {
    type: USER_LOGIN,
    payload: accessToken,
  };
}
