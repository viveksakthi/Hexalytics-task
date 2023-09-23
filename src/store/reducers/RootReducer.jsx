import React from "react";
import { combineReducers } from "redux";
import CommonReducer from "./CommonReducer";
// import ChildReducer from "./ChildReducer";


const combineReducer = combineReducers({CommonReducer}); 

const RootReducer = (state, action) => {
  
    if (action.type === "RESET_APP_STORE") {
      state = undefined;
    }
      
    return combineReducer(state, action);
  };
export default RootReducer;