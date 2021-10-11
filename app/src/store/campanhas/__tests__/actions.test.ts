import {CampanhaBuildMock} from '../__mocks__/CampanhaBuildMock.mock';

import actions from '../actions';
import {CampanhaTypes} from '../types';

describe('Campanha Actions', () => {
  const mockCampanha = new CampanhaBuildMock().withNome('boticario').build();

  const setError = [
    'setError',
    actions.setError('error'),
    {type: CampanhaTypes.SET_ERROR, payload: {error: 'error'}},
  ];

  const buscaListaCampanhas = [
    'buscaListaCampanhas',
    actions.buscaListaCampanhas(),
    {type: CampanhaTypes.BUSCA_LISTA_CAMPANHA},
  ];

  const setListaCampanhas = [
    'setListaCampanhas',
    actions.setListaCampanhas([mockCampanha]),
    {
      type: CampanhaTypes.SET_LISTA_CAMPANHA,
      payload: {listaCampanhas: [mockCampanha]},
    },
  ];

  test.each([setError, buscaListaCampanhas, setListaCampanhas] as Array<
    [string, typeof actions, any]
  >)('deve retornar as actions corretas %s', (describe, action, expected) => {
    expect(action).toEqual(expected);
  });
});
