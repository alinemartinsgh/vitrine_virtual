import { CampanhaState } from '../campanhas/types';

import { initialState } from './initialState.mock';

export class StateMockBuilder {
  campanhaReducer: CampanhaState = initialState.campanhaReducer;

  withCampanha(state: CampanhaState) {
    this.campanhaReducer = state;
    return this;
  }

  build = () => {
    return {
      campanhaReducer: this.campanhaReducer,
    };
  };
}
