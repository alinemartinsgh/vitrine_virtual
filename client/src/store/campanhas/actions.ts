import {
  CampanhaAction,
  CampanhaTypes,
  Campanha,
  ListaCampanhas,
  CampanhaForm,
} from './types';

const actions = {
  setError: (error?: string): CampanhaAction<{ error?: string }> => ({
    type: CampanhaTypes.SET_ERROR,
    payload: { error },
  }),

  buscaListaCampanhas: () => ({
    type: CampanhaTypes.BUSCA_LISTA_CAMPANHA,
  }),

  setListaCampanhas: (
    listaCampanhas: ListaCampanhas,
  ): CampanhaAction<{ listaCampanhas: ListaCampanhas }> => ({
    type: CampanhaTypes.SET_LISTA_CAMPANHA,
    payload: { listaCampanhas },
  }),

  /*   buscaPorId: () => ({
    type: CampanhaTypes.BUSCA_POR_ID_CAMPANHA,
  }),

  setCampanhaPorId: (campanha: Campanha) => ({
    type: CampanhaTypes.SET_CAMPANHA,
    payload: { campanha },
  }), */

  adicionarCampanha: (
    data: CampanhaForm,
  ): CampanhaAction<{ data: Campanha }> => ({
    type: CampanhaTypes.ADICIONAR_CAMPANHA,
    payload: { data },
  }),

  atualizarCampanha: (
    id: string,
    campanha: Campanha,
  ): CampanhaAction<{ id: string; campanha: Campanha }> => ({
    type: CampanhaTypes.ATUALIZAR_CAMPANHA,
    payload: { id, campanha },
  }),

  deletarCampanha: (id: string): CampanhaAction<{ id: string }> => ({
    type: CampanhaTypes.DELETE_CAMPANHA,
    payload: { id },
  }),
};

export default actions;
