/* eslint-disable import/no-anonymous-default-export */
import { call, put, takeLatest } from 'redux-saga/effects';
import { setToken } from '../../utils/token';
import { loginActions } from '.';

import * as repository from './repository';
import { LoginAction, LoginTypes } from './types';

export function* requestEmailPassword(
  props: LoginAction<{ email: string; senha: string }>,
): any {
  const email = props.payload?.email;
  const senha = props.payload?.senha;

  try {
    const response: any = yield call(repository.LoginEmailSenha, email, senha);
    let token = response.data.Login.accessToken;

    if (email && senha) {
      if (token) {
        yield call(setToken, token);
        yield put(loginActions.login(token));
        window.location.pathname = '/homePage';
      }
    }
  } catch (err) {
    yield put(loginActions.loginError(err));
  }
}

export default [
  takeLatest(LoginTypes.REQUEST_EMAIL_PASSWORD, requestEmailPassword),
];
