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
    type: CampanhaTypes.BUSCA_LISTA_CAMPANHA,
  }),

  setListaCampanhas: (
    listaCampanhas: ListaCampanhas,
  ): CampanhaAction<{ listaCampanhas: ListaCampanhas }> => ({
    type: CampanhaTypes.SET_LISTA_CAMPANHA,
    payload: { listaCampanhas },
  }),

  /* buscaPorId: (id: string) => ({
    type: CampanhaTypes.BUSCA_POR_ID_CAMPANHA,
    payload: id,
  }),

  setCampanhaPorId: () => ({
    type: CampanhaTypes.SET_CAMPANHA,
  }), */

  adicionarCampanha: (
    campanha: Partial<Campanha>,
  ): CampanhaAction<{ campanha: Partial<Campanha> }> => ({
    type: CampanhaTypes.ADICIONAR_CAMPANHA,
    payload: { campanha },
  }),

  atualizarCampanha: (
    id: any,
    campanha: Partial<Campanha>,
  ): CampanhaAction<{ campanha: Partial<Campanha> }> => ({
    type: CampanhaTypes.ATUALIZAR_CAMPANHA,
    payload: { campanha },
  }),

  deletarCampanha: (id: string): CampanhaAction<{ id: string }> => ({
    type: CampanhaTypes.DELETE_CAMPANHA,
    payload: { id },
  }),
};

export default actions;
