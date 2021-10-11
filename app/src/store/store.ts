import {createStore, applyMiddleware, Store} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer, RootState} from './rootReducer';
import {rootSagas} from './rootSagas';

export const configureStore = (): {store: Store} => {
  const sagaMiddleware = createSagaMiddleware();
  const store: Store<RootState> = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSagas);

  return {store};
};
