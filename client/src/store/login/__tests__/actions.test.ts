import actions from '../actions';
import { LoginTypes } from '../types';

describe('Actions Login', () => {
  const logout = ['logout', actions.logout(), { type: LoginTypes.LOGOUT }];

  const login = [
    'login',
    actions.login('asduifhiauhiu23h42uh'),
    {
      type: LoginTypes.LOGIN,
      payload: { token: 'asduifhiauhiu23h42uh' },
    },
  ];

  const requestLoginEmailPassword = [
    'requestLoginEmailPassword',
    actions.requestLoginEmailPassword('admin@gmail.com', '12345'),
    {
      type: LoginTypes.REQUEST_EMAIL_PASSWORD,
      payload: { email: 'admin@gmail.com', senha: '12345' },
    },
  ];

  const loginError = [
    'loginError',
    actions.loginError('erro'),
    {
      type: LoginTypes.LOGIN_ERROR,
      payload: { error: 'erro' },
    },
  ];

  test.each([logout, login, requestLoginEmailPassword, loginError])(
    'deve retornar a action',
    (describe, action, expected) => {
      expect(action).toEqual(expected);
    },
  );
});
