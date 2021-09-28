// == Action types
export const UPDATE_USER_FIELD = 'UPDATE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER = 'SAVE_USER';
export const DISPLAY_USER = 'DISPLAY_USER';
export const LOG_OUT = 'LOG_OUT';
export const GET_USER = 'GET_USER';
export const RECONNECT_USER = 'RECONNECT_USER';

// === Action creators
export const updateUserField = (newValue, name) => ({
  type: UPDATE_USER_FIELD,
  newValue,
  name,
});

export const logIn = () => ({
  type: LOG_IN,
});

export const saveUser = () => ({
  type: SAVE_USER,
});

export const getUser = () => ({
  type: GET_USER,
});

export const displayUser = (userProfil) => ({
  type: DISPLAY_USER,
  loadedUser: userProfil,
});

export const logOut = (user) => ({
  type: LOG_OUT,
  user,
});

export const reconnectUser = () => ({
  type: RECONNECT_USER,
});
