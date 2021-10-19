/* eslint-disable jest/no-mocks-import */
import { StateMockBuilder } from '../../__mocks__/StateMockBuilder';

import * as selectors from '../selectors';

describe('Selector para Login', () => {
  const mockState = new StateMockBuilder()
    .withLogin({
      isLoading: false,
      error: undefined,
      isLogged: false,
    })
    .build();

  const getError = ['getError', selectors.getError(mockState), undefined];

  test.each([getError] as Array<[string, typeof selectors, any]>)(
    'deve retornar corretamente os dados do selector %s',
    (describe, selector, expected) => {
      expect(selector).toEqual(expected);
    },
  );
});
