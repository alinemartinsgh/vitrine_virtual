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
    currentUser: {
      email: 'email@email.com',
      senha: '12345',
    },
    email: 'email@email.com',
  },
};
