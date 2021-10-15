import { actions as campanhaAction } from '.';
import {
  CampanhaAction,
  CampanhaReducer,
  CampanhaState,
  CampanhaTypes,
} from './types';

export const initialState: CampanhaState = {
  isLoading: false,
  listaCampanhas: [],
  error: undefined,
};

const setError: CampanhaReducer = (state, action) => {
  const { payload } = action as ReturnType<typeof campanhaAction.setError>;

  return {
    ...state,
    isLoading: false,
    error: payload.error,
  };
};

const buscaListaCampanhas: CampanhaReducer = (state) => ({
  ...state,
  isLoading: true,
  error: undefined,
});

const setListaCampanhas: CampanhaReducer = (state, action) => {
  const { payload } = action as ReturnType<
    typeof campanhaAction.setListaCampanhas
  >;
  return {
    ...state,
    listaCampanhas: payload.listaCampanhas,
    isLoading: true,
    error: undefined,
  };
};

const adicionarCampanha: CampanhaReducer = (state, action) => {
  action as unknown as ReturnType<typeof campanhaAction.adicionarCampanha>;
  return {
    ...state,
    listaCampanhas: [...state.listaCampanhas],
    isLoading: true,
    error: undefined,
  };
};

const atualizarCampanha: CampanhaReducer = (state, action) => {
  const { payload } = action as unknown as ReturnType<
    typeof campanhaAction.atualizarCampanha
  >;
  const novaListaCampanhas = [...state.listaCampanhas];

  let index = novaListaCampanhas.findIndex(
    (campanha) => campanha.id === payload.id,
  );

  novaListaCampanhas[index] = payload.campanha;
  return {
    ...state,
    listaCampanhas: novaListaCampanhas,
    isLoading: true,
    error: undefined,
  };
};

const CampanhaMap = new Map([
  [CampanhaTypes.SET_ERROR, setError],
  [CampanhaTypes.BUSCA_LISTA_CAMPANHA, buscaListaCampanhas],
  [CampanhaTypes.SET_LISTA_CAMPANHA, setListaCampanhas],
  [CampanhaTypes.ADICIONAR_CAMPANHA, adicionarCampanha],
  [CampanhaTypes.ATUALIZAR_CAMPANHA, atualizarCampanha],
]);

const reducer = (
  state: CampanhaState = initialState,
  action: CampanhaAction<CampanhaState>,
): CampanhaState => {
  const campanhaReducer = CampanhaMap.get(action.type);

  if (campanhaReducer) return campanhaReducer(state, action);

  return state;
};

export default reducer;
