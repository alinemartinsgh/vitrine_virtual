import { RootState } from '../rootReducer';

export const initialState: RootState = {
  campanhaReducer: {
    isLoading: false,
    listaCampanhas: [],
    error: undefined,
  },
  loginReducer: {
    currentUser: undefined,
    isLogged: false,
    isLoading: false,
    email: '',
  },
};
