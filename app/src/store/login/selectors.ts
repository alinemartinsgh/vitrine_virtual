import {RootState} from '../rootReducer';

export const getCurrentUser = (state: RootState) =>
  state.loginReducer.currentUser;
