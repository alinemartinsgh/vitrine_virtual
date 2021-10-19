import { RootState } from 'src/store/rootReducer';

export const InitialState: RootState = {
  campanhaReducer: {
    isLoading: false,
    listaCampanhas: [],
    error: undefined,
  },
  loginReducer: {
    isLogged: false,
    isLoading: false,
  },
};
