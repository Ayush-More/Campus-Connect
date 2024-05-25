import { configureStore , combineReducers} from "@reduxjs/toolkit";
import themeToggleReducer from "./Slice/themeSlice";
import authReducer from "./Slice/AuthSlice";
import storage from "redux-persist/lib/storage";
import FavouriteReducer from "./Slice/FavouriteSlice";
import pdfReducer from "./Slice/pdfSlice";
import { persistReducer } from "redux-persist";


// import Authnumber from "./slice/Authnumber";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  favourite:FavouriteReducer,
  auth: authReducer,
  themeKey: themeToggleReducer,
  pdfView : pdfReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;




