import { LoginState } from 'src/store/login/types';
import { CampanhaState } from '../campanhas/types';

import { InitialState } from './initialState.mock';

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
      loginReducer: this.loginReducer,
    };
  };
}
