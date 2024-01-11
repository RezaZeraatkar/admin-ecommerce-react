// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import sidebarShowReducer from './slices/sidebar';

const rootReducer = combineReducers({
  sidebar: sidebarShowReducer,
});

export default rootReducer;
