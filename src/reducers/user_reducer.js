import {
  SET_ACCESS_TOKEN,
  USER_LOGOUT,
  SET_USER_INFO,
  USER_UPDATE,
  USER_REGISTER,
  USER_UNREGISTER,
} from '../actions/user_action';

export default function user(state = {}, action) {
  // 새로운 state를 만들어 반환

  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload };

    case USER_LOGOUT:
      return { ...state, accessToken: null, userInfo: null };

    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };

    case USER_UPDATE:
      return { ...state, update: action.payload };

    case USER_REGISTER:
      return { ...state, register: action.payload };

    case USER_UNREGISTER:
      return { ...state, unregister: action.payload };

    default:
      return state;
  }
}
