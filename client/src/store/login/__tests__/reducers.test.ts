import { loginActions } from '..';
import reducer from '../reducers';
import { LoginState, LoginTypes, LoginAction } from '../types';

describe('Reducers de Login', () => {
  const initialState = {
    isLogged: false,
    isLoading: false,
    error: undefined,
  };

  const any = ['any', { type: 'any' as LoginTypes }, { ...initialState }];

  const logout = [
    'logout',
    loginActions.logout(),
    { ...initialState, isLoading: false, isLogged: false, error: undefined },
  ];

  const login = [
    'login',
    loginActions.login('fsdifioj213oi2dasfasf'),
    {
      ...initialState,
      isLoading: false,
      error: undefined,
      isLogged: true,
      token: 'fsdifioj213oi2dasfasf',
    },
  ];

  const requestEmailPassword = [
    'requestEmailPassword',
    loginActions.requestLoginEmailPassword('admin@gmail.com', '12345'),
    { ...initialState, isLogged: false, isLoading: true },
  ];

  const loginError = [
    'loginError',
    loginActions.loginError('erro'),
    { ...initialState, isLoading: false, error: 'erro' },
  ];

  test.each([any, logout, login, requestEmailPassword, loginError] as Array<
    [string, LoginAction<LoginState>, LoginState]
  >)(
    'deve retornar o state corresponente a action',
    (describe, action, expected) => {
      const response = reducer(initialState, action);
      expect(response).toEqual(expected);
    },
  );
});
