import { CampanhaAction, CampanhaTypes, Campanha } from './types';

const actions = {
  setError: (error: string): CampanhaAction<{ error?: string }> => ({
    type: CampanhaTypes.SET_ERROR,
    payload: { error },
  }),

  buscaCampanhas: () => ({
    type: CampanhaTypes.REQUEST_CAMPANHAS,
  }),

  buscaCampanhaPorId: (id: string) => ({
    type: CampanhaTypes.REQUEST_CAMPANHA,
    payload: id,
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
