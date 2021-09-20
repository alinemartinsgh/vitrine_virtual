import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

// adicionar rootReducer
export const store = createStore(_, applyMiddleware(sagaMiddleware));
//adicionar rootSaga
sagaMiddleware.run(_);
