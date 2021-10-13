import {all} from '@redux-saga/core/effects';

import sagasCampanha from './campanhas/sagas';

export function* rootSagas() {
  yield all([...sagasCampanha]);
}
