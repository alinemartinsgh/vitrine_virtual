import {CampanhaAction, CampanhaTypes, ListaCampanhas} from './types';

const actions = {
  setError: (error: string): CampanhaAction<{error?: string}> => ({
    type: CampanhaTypes.SET_ERROR,
    payload: {error},
  }),

  buscaListaCampanhas: () => ({
    type: CampanhaTypes.BUSCA_LISTA_CAMPANHA,
  }),

  setListaCampanhas: (
    listaCampanhas: ListaCampanhas,
  ): CampanhaAction<{listaCampanhas: ListaCampanhas}> => ({
    type: CampanhaTypes.SET_LISTA_CAMPANHA,
    payload: {listaCampanhas},
  }),
};

export default actions;
