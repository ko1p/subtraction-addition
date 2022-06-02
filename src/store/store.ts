// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

import { configureStore } from "@reduxjs/toolkit";

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducer,
//     composeEnhancers(
//         applyMiddleware(thunk)
//     )
// )

// export default store;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
