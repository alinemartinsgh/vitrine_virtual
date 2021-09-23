import { LoginTypes, LoginAction } from './types';

const actions = {
  logout: () => ({ type: LoginTypes.LOGOUT }),
  login: (usuarioAtual: any): LoginAction<{ usuarioAtual: any }> => ({
    type: LoginTypes.LOGIN,
    payload: { usuarioAtual },
  }),
  requestLoginEmailPassword: (
    email: string,
    senha: string,
  ): LoginAction<{ email: string; senha: string }> => ({
    type: LoginTypes.REQUEST_EMAIL_PASSWORD,
    payload: { email, senha },
  }),
  loginError: (error: Error) => ({
    type: LoginTypes.LOGIN_ERROR,
    payload: { error },
  }),
};

export default actions;
