import { combineReducers } from '@reduxjs/toolkit';
import notesReducer from '../table/notesSlice';

const rootReducer = combineReducers({
  notes: notesReducer,
});

export default rootReducer;
