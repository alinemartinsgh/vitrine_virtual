import {all} from '@redux-saga/core/effects';

import sagasCampanha from './campanhas/sagas';
import sagasLogin from './login/sagas';

export function* rootSagas() {
  yield all([...sagasCampanha, ...sagasLogin]);
}
