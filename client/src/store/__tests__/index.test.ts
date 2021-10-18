import * as redux from 'redux';
import * as reduxSaga from '@redux-saga/core';

import { configureStore } from '../store';

import { rootReducer } from '../rootReducer';
import { rootSagas } from '../rootSagas';

describe('Fluxo da store', () => {
  const sagaMiddleware = { run: jest.fn() };
  const createSagaMiddleware = jest.spyOn(reduxSaga, 'default');

  const createStore = jest.spyOn(redux, 'createStore');
  const applyMiddleware = jest.spyOn(redux, 'applyMiddleware');

  test('deve configurar a saga corretamente', () => {
    createSagaMiddleware.mockReturnValue(sagaMiddleware as never);

    const { store } = configureStore();

    expect(createSagaMiddleware).toHaveBeenCalled();
    expect(applyMiddleware).toHaveBeenCalledWith(sagaMiddleware);

    expect(createStore).toHaveBeenCalledWith(rootReducer, {}, undefined);

    expect(sagaMiddleware.run).toHaveBeenCalledWith(rootSagas);
    expect(store).toEqual(createStore.mock.results[0].value);
  });
});
