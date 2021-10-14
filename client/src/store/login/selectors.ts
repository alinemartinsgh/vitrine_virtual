import { RootState } from '../rootReducer';

export const getCurrentUser = (state: RootState) =>
  state.loginReducer.currentUser;

export const getError = (state: RootState) => state.loginReducer.error;
