import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import courseReducer from "./course_reducer";
import recipeReducer from "./recipe_reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["userReducer", "courseReducer", "recipeReducer"],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({
  userReducer,
  recipeReducer,
  courseReducer,
});

export default persistReducer(persistConfig, rootReducer);
