import {RootState} from '../rootReducer';

export const initialAppState: RootState = {
  campanhaReducer: {
    isLoading: false,
    listaCampanhas: [],
    error: undefined,
  },
};
