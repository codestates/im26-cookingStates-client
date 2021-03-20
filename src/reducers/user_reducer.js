import { USER_LOGIN, USER_LOGOUT, USER_INFO, USER_UPDATE, USER_REGISTER, USER_UNREGISTER } from '../actions/user_action';

export default function (state = {}, action) {
  // 새로운 state를 만들어 반환

  switch (action.type) {
    case USER_LOGIN:
      return { ...state, login: action.payload };

    case USER_LOGOUT:
      return { ...state, logout: action.payload };

    case USER_INFO:
      return { ...state, info: action.payload };

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
