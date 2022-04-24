import { createAction, createSlice } from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import authService from '../services/auth.service';
import history from '../utils/history';
import usersService from '../services/users.service';
import { getUserHabits } from './habits';
import { checkDay } from './days';
import dayjs from 'dayjs';

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserIdToken() },
      isLoggedIn: true,
      dataLoaded: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false
    };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    authRequested: (state) => {
      state.error = null;
    },
    authRequestSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.auth = action.payload;
    },
    authRequestFail: (state, action) => {
      state.error = action.payload;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.auth = null;
      state.isLoggedIn = false;
      state.dataLoaded = false;
    },
    userRequested: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    userRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
      state.dataLoaded = true;
    },
    userRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  authRequested,
  authRequestSuccess,
  authRequestFail,
  userLoggedOut,
  userRequested,
  userRequestSuccess,
  userRequestFailed
} = actions;

export const getUserData = () => async (dispatch) => {
  dispatch(userRequested());
  try {
    const data = await usersService.get();
    dispatch(userRequestSuccess(data));
    dispatch(getUserHabits());
  } catch (error) {
    dispatch(userRequestFailed(error.message));
    history.push('/logout');
  }
};

export const register = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    console.log(payload);
    const data = await authService.register(payload);
    dispatch(authRequestSuccess({ userId: data.userId }));
    localStorageService.setTokens(data);
    dispatch(checkDay(dayjs().format('YYYY-MM-DD')));
    history.push('/');
  } catch (error) {
    dispatch(authRequestFail(error.message));
  }
};

export const login = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.login(payload);
    dispatch(authRequestSuccess({ userId: data.localId }));
    localStorageService.setTokens(data);
    dispatch(checkDay(dayjs().format('YYYY-MM-DD')));
    history.push('/');
  } catch (error) {
    dispatch(authRequestFail(error.message));
  }
};

export const logout = () => (dispatch) => {
  dispatch(userLoggedOut());
  localStorageService.removeAuthData();
  history.push('/');
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

export const getUser = () => (state) => state.users.entities;

export const getIsLoading = () => (state) => state.users.isLoading;

export const getUserDataStatus = () => (state) => state.users.dataLoaded;

export const getError = () => (state) => state.users.error;

export default usersReducer;
