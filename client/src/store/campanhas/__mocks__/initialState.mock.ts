import { LoginState } from 'src/store/login/types';
import { CampanhaState } from '../types';
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

export class StateMockBuilder {
  campanhaReducer = InitialState.campanhaReducer;
  loginReducer = InitialState.loginReducer;

  withCampanha(state: CampanhaState) {
    this.campanhaReducer = state;
    return this;
  }

  withLogin(state: LoginState) {
    this.loginReducer = state;
    return this;
  }

  build = () => {
    return {
      campanhaReducer: this.campanhaReducer,
      loginReducer: this.loginReducer
    };
  };
}
