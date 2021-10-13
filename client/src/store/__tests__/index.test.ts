import * as redux from 'redux';
import * as reduxSaga from '@redux-saga/core';

import { configureStore } from '../store';

import { rootReducer } from '../rootReducer';

describe('Fluxo da store', () => {
  const createSagaMiddleware = jest.spyOn(reduxSaga, 'default');
  const createStore = jest.spyOn(redux, 'createStore');
  const applyMiddleware = jest.spyOn(redux, 'applyMiddleware');

  test('deve configurar a saga corretamente', () => {
    const { store } = configureStore();
    const sagaMiddleware = createSagaMiddleware.mock.results[0].value;

    console.log('oi');
    console.log(createSagaMiddleware.mock);

    expect(createSagaMiddleware).toHaveBeenCalled();
    expect(applyMiddleware).toHaveBeenCalledWith(sagaMiddleware);

    expect(createStore).toHaveBeenCalledWith(
      rootReducer,
      {},
      expect.any(Function),
    );

    expect(store).toEqual(createStore.mock.results[0].value);
  });
});
