import { combineReducers } from "redux";
import authSlice from "../slices/authSlice";  

// Combine all the reducers
const rootReducer = combineReducers({
  auth: authSlice,
});

export default rootReducer;
