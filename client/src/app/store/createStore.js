import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './users';
import habitsReducer from './habits';
import daysReducer from './days';

const rootReducer = combineReducers({
  users: usersReducer,
  habits: habitsReducer,
  days: daysReducer
});

export function createStore() {
  return configureStore({ reducer: rootReducer });
}
