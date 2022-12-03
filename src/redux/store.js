import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import authMiddleware from "../redux/middleware/authMiddleware";
import saveCardMiddleware from "../redux/middleware/saveCardMiddleware";
import localStorageMiddleware from "./middleware/localStorageMiddleware";


const preloadedState = JSON.parse(localStorage.getItem ("APP_STATE") || '{}');
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, saveCardMiddleware, localStorageMiddleware),
  preloadedState, 
});

export default store;
