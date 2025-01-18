import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer"; 

// Create the Redux store
export const store = configureStore({
  reducer: rootReducer,  // Pass rootReducer to the store
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
