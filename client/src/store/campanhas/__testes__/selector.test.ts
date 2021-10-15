/* eslint-disable jest/no-mocks-import */

import { CampanhaBuilderMock } from '../__mocks__/campanha.mock';
import { StateMockBuilder } from '../__mocks__/initialState.mock';

import * as selectors from '../selectors';

describe('Selector para Campanha', () => {
  const mockCampanha = new CampanhaBuilderMock()
    .withId('12345')
    .withNome('campanha teste')
    .build();

  const mockState = new StateMockBuilder()
    .withCampanha({
      isLoading: false,
      listaCampanhas: [mockCampanha],
      error: undefined,
    }).build();

  const getListaCampanhas = [
    'getListaCampanhas',
    selectors.getListaCampanhas(mockState),
    [mockCampanha],
  ];

  test.each([getListaCampanhas] as Array<[string, typeof selectors, any]>)(
    'deve retornar corretamente os dados do selector %s',
    (describe, selector, expected) => {
      expect(selector).toEqual(expected);
    },
  );
});
