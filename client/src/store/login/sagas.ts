import { call, put, takeLatest } from 'redux-saga/effects';
import { loginActions } from '.';

import * as repository from './repository';
import { LoginAction, LoginTypes } from './types';

export function* requestEmailPassword(
  props: LoginAction<{ email: string; senha: string }>,
) {
  const email = props.payload?.email;
  const senha = props.payload?.senha;

  console.log("oi");

  try {
    if (email && senha) {
      /*
      const credenciaisUsuario: repository.LoginResponse = yield call(
        repository.Login,
        email,
        senha,
      );
      */

      const credenciaisUsuario = { email: 'leo', senha: '12345' };
      yield put(loginActions.login(credenciaisUsuario));
    }
  } catch (err) {
    console.log(err);
  }
}

export default [
  takeLatest(LoginTypes.REQUEST_EMAIL_PASSWORD, requestEmailPassword),
];
