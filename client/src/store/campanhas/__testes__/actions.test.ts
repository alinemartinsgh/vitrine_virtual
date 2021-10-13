/* eslint-disable jest/no-mocks-import */
import { CampanhaBuilderMock } from '../__mocks__/campanha.mock';
import actions from '../actions';
import { CampanhaTypes } from '../types';

describe('Actions Campanha', () => {
  const mockCampanha = new CampanhaBuilderMock().withNome('Campanha').build();
  const mockListaCampanhas = [mockCampanha];
  const setError = [
    'setError',
    actions.setError('error'),
    { type: CampanhaTypes.SET_ERROR, payload: { error: 'error' } },
  ];

  const buscaListaCampanhas = [
    'buscaListaCampanha',
    actions.buscaListaCampanhas(),
    { type: CampanhaTypes.BUSCA_LISTA_CAMPANHA },
  ];

  const setListaCampanhas = [
    'setListaCampanhas',
    actions.setListaCampanhas([mockCampanha]),
    {
      type: CampanhaTypes.SET_LISTA_CAMPANHA,
      payload: { listaCampanhas: mockListaCampanhas },
    },
  ];

  const adicionarCampanha = [
    'adicionarCampanha',
    actions.adicionarCampanha(mockCampanha),
    { type: CampanhaTypes.ADICIONAR_CAMPANHA, payload: { data: mockCampanha } },
  ];

  const atualizarCampanha = [
    'atualizarCampanha',
    actions.atualizarCampanha('111', mockCampanha),
    {
      type: CampanhaTypes.ATUALIZAR_CAMPANHA,
      payload: { id: '111', campanha: mockCampanha },
    },
  ];

  const deletarCampanha = [
    'deletarCampanha',
    actions.deletarCampanha('111'),
    {
      type: CampanhaTypes.DELETE_CAMPANHA,
      payload: { id: '111' },
    },
  ];

  test.each([
    setError,
    setListaCampanhas,
    buscaListaCampanhas,
    adicionarCampanha,
    atualizarCampanha,
    deletarCampanha,
  ])('deve retornar corretamente a action', (describe, action, expected) => {
    expect(action).toEqual(expected);
  });
});
