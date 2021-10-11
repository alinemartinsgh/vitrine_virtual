import {CampanhaState} from '../campanhas/types';

import {initialAppState} from './initialAppState.mock';

export class AppStateMockBuilder {
  campanhaReducer: CampanhaState = initialAppState.campanhaReducer;

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
