import {CampanhaBuildMock} from '../__mocks__/CampanhaBuildMock.mock';
import actions from '../actions';
import reducer from '../reducers';

import {CampanhaTypes, CampanhaState, CampanhaAction} from '../types';

describe('Campanha Reducers', () => {
  const initialState = {
    isLoading: false,
    listaCampanhas: [],
    error: undefined,
  };

  const mockData = new CampanhaBuildMock().withNome('boticario').build();

  const any = ['any', {type: 'any' as CampanhaTypes}, {...initialState}];

  const setError = [
    'setError',
    actions.setError('error'),
    {...initialState, error: 'error'},
  ];

  const buscaListaCampanhas = [
    'buscaListaCampanhas',
    actions.buscaListaCampanhas(),
    {...initialState, isLoading: true, error: undefined},
  ];

  const setListaCampanhas = [
    'setListaCampanhas',
    actions.setListaCampanhas([mockData]),
    {...initialState, listaCampanhas: [mockData]},
  ];

  test.each([any, setError, buscaListaCampanhas, setListaCampanhas] as Array<
    [string, CampanhaAction<CampanhaState>, CampanhaState]
  >)(
    'deve retornar corretamente o state para a action %s',
    (describe, action, expected) => {
      const response = reducer(initialState, action);

      expect(response).toEqual(expected);
    },
  );
});
