import { LoginTypes, LoginAction } from './types';
import { Usuario } from './types';

const actions = {
  logout: () => ({ type: LoginTypes.LOGOUT }),
  login: (usuarioAtual: Usuario): LoginAction<{ usuarioAtual: Usuario }> => ({
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
