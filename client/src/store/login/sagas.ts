import { call, put, takeLatest } from 'redux-saga/effects';
import { loginActions } from '.';

import * as repository from './repository';
import { LoginAction, LoginTypes } from './types';

export function* requestEmailPassword(
  props: LoginAction<{ email: string; senha: string }>,
) : any {
  const email = props.payload?.email;
  const senha = props.payload?.senha;

  console.log('oi');

  try {
    const response: any = yield call(repository.LoginEmailSenha, email, senha);
    let token = response.data.Login.accessToken;

    console.log(token);

    if (email && senha) {
      if (token) {
        console.log(token);
        yield put(loginActions.login(token));
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export default [
  takeLatest(LoginTypes.REQUEST_EMAIL_PASSWORD, requestEmailPassword),
];
