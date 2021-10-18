import { RootState } from '../rootReducer';

export const getListaCampanhas = (state: RootState) =>
  state.campanhaReducer.listaCampanhas;
