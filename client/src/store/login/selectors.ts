import { RootState } from '../rootReducer';

export const getError = (state: RootState) => state.loginReducer.error;
