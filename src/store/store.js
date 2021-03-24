import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import promise from "redux-promise";
import { persistStore } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, promise))
);
const persistor = persistStore(store);

export { store, persistor };
