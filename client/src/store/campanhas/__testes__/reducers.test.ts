/* eslint-disable jest/no-mocks-import */
import { CampanhaBuilderMock } from '../__mocks__/campanha.mock';
import { actions } from '..';
import reducer from '../reducers';
import { CampanhaAction, CampanhaState, CampanhaTypes } from '../types';

describe('Reducers de Campanha', () => {
  const mockData = new CampanhaBuilderMock()
    .withId('1234')
    .withNome('Campanha Teste')
    .build();
    
  const initialState = {
    isLoading: false,
    listaCampanhas: [mockData],
    error: undefined,
  };

  const any = ['any', { type: 'any' as CampanhaTypes }, { ...initialState }];

  const setError = [
    'setError',
    actions.setError('error'),
    { ...initialState, isLoading: false, error: 'error' },
  ];

  const setListaCampanhas = [
    'setListaCampanhas',
    actions.setListaCampanhas([mockData]),
    {
      ...initialState,
      isLoading: true,
      listaCampanhas: [mockData],
      error: undefined,
    },
  ];

  const listaCampanhas = [
    'buscaListaCampanhas',
    actions.buscaListaCampanhas(),
    { ...initialState, isLoading: true, error: undefined },
  ];

  const adicionarCampanha = [
    'adicionarCampanha',
    actions.adicionarCampanha(mockData),
    { ...initialState, isLoading: true, error: undefined },
  ];

  const atualizarCampanha = [
    'adicionarCampanha',
    actions.atualizarCampanha('1234', mockData),
    {
      ...initialState,
      isLoading: true,
      error: undefined,
      listaCampanhas: [mockData],
    },
  ];

  test.each([
    any,
    setError,
    setListaCampanhas,
    listaCampanhas,
    adicionarCampanha,
    atualizarCampanha,
  ] as Array<[string, CampanhaAction<CampanhaState>, CampanhaState]>)(
    'deve retornar o state correspondente a action',
    (_describe, action, expected) => {
      const response = reducer(initialState, action);
      expect(response).toEqual(expected);
    },
  );
});
