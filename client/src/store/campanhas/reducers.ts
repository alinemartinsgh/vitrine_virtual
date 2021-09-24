import { actions as campanhaAction } from '.';
import {
  CampanhaAction,
  CampanhaReducer,
  CampanhaState,
  CampanhaTypes,
} from './types';

const initialState: CampanhaState = {
  isLoading: false,
  listaCampanhas: [],
  error: undefined,
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

const setError: CampanhaReducer = (state, action) => {
  const { payload } = action as ReturnType<typeof campanhaAction.setError>;

  return {
    ...state,
    isLoading: false,
    error: payload.error,
  };
};

const CampanhaMap = new Map([
  [CampanhaTypes.SET_ERROR, setError],
  [CampanhaTypes.REQUEST_LISTACAMPANHA, buscaListaCampanhas],
  [CampanhaTypes.SET_LISTACAMPANHA, setListaCampanhas],
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
