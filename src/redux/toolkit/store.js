import { createStore } from "redux";
import rootReducer from "./root-reducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// toolkit-store
// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./root-reducer";

// const store = configureStore(rootReducer);

// export default store;