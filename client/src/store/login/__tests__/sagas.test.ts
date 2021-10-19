/* eslint-disable jest/no-mocks-import */
import { put, call } from 'redux-saga/effects';

import * as sagas from '../sagas';
import * as repository from '../repository';
import { loginActions } from '..';

import { LoginBuilderMock } from '../__mocks__/login.mock';
import { setToken } from 'src/utils/token';

const mockLogin = new LoginBuilderMock()
  .withEmail('admin@gmail.com')
  .withSenha('12345');

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
