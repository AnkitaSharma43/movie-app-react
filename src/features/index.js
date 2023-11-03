import { combineReducers } from "@reduxjs/toolkit";
import HomePageSlice from "./home-page/HomePageSlice";

const rootReducer = combineReducers({
    homeData:HomePageSlice
})

export default rootReducer