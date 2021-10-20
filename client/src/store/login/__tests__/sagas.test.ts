/* eslint-disable jest/no-mocks-import */
import { call } from 'redux-saga/effects';

import * as sagas from '../sagas';
import * as repository from '../repository';
import { loginActions } from '..';

describe('Login Sagas', () => {
  test('deve realizar o request de email e senha', () => {
    const action = loginActions.requestLoginEmailPassword(
      'admin@gmail.com',
      '12345',
    );

    const gen = sagas.requestEmailPassword(action);

    expect(gen.next().value).toEqual(
      call(repository.LoginEmailSenha, 'admin@gmail.com', '12345'),
    );
  });
});
