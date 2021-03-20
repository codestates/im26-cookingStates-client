import { combineReducers } from 'redux';
import userReducer from './user_reducer';
// import courseReducer from './course_reducer';
// import recipeReducer from './recipe_reducer';

const rootReducer = combineReducers({
  userReducer,
  //  courseReducer, recipeReducer
});

export default rootReducer;
