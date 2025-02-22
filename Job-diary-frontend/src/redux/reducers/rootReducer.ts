import { combineReducers } from "redux";
import authSlice from "../slices/authSlice";
import jobSlice, { JobState } from "../slices/jobSlice"; // Import JobState

// Combine all the reducers
const rootReducer = combineReducers({
  auth: authSlice,
  jobs: jobSlice, // Use the job reducer
});

// Explicitly define RootState type
export type RootState = {
  auth: ReturnType<typeof authSlice>;
  jobs: JobState;
};

export default rootReducer;
