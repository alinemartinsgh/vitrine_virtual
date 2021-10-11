import {AppStateMockBuilder} from '../../__mocks__/AppStateMockBuilder';

import {CampanhaBuildMock} from '../__mocks__/CampanhaBuildMock.mock';

import * as selectors from '../selectors';

describe('Selector para Campanha', () => {
  const mockCampanha = new CampanhaBuildMock().withNome('boticario').build();

  const mockState = new AppStateMockBuilder()
    .withCampanha({
      isLoading: false,
      listaCampanhas: [mockCampanha],
      error: undefined,
    })
    .build();

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
