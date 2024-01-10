// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import sidebarShowReducer from './slices/sidebar';

const rootReducer = combineReducers({
  sidebar: sidebarShowReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
