import {
  CampanhaAction,
  CampanhaTypes,
  Campanha,
  ListaCampanhas,
} from './types';

const actions = {
  setError: (error: string): CampanhaAction<{ error?: string }> => ({
    type: CampanhaTypes.SET_ERROR,
    payload: { error },
  }),

  buscaListaCampanhas: () => ({
    type: CampanhaTypes.REQUEST_LISTACAMPANHA,
  }),

  setListaCampanhas: (
    listaCampanhas: ListaCampanhas,
  ): CampanhaAction<{ listaCampanhas: ListaCampanhas }> => ({
    type: CampanhaTypes.SET_LISTACAMPANHA,
    payload: { listaCampanhas },
  }),

  buscaCampanhaPorId: (id: string) => ({
    type: CampanhaTypes.REQUEST_CAMPANHA,
    payload: id,
  }),

  setCampanhaPorId: () => ({
    type: CampanhaTypes.SET_CAMPANHA,
  }),

  adicionarCampanha: (
    campanha: Partial<Campanha>,
  ): CampanhaAction<{ campanha: Partial<Campanha> }> => ({
    type: CampanhaTypes.CREATE_CAMPANHA,
    payload: { campanha },
  }),

  atualizarCampanha: (
    campanha: Partial<Campanha>,
  ): CampanhaAction<{ campanha: Partial<Campanha> }> => ({
    type: CampanhaTypes.UPDATE_CAMPANHA,
    payload: { campanha },
  }),

  deletarCampanha: (id: string): CampanhaAction<{ id: string }> => ({
    type: CampanhaTypes.DELETE_CAMPANHA,
    payload: { id },
  }),
};

export default actions;
