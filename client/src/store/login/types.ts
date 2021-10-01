export enum LoginTypes {
  LOGIN = '@login/LOGIN',
  REQUEST_EMAIL_PASSWORD = '@login/REQUEST_EMAIL_PASSWORD',
  LOGOUT = '@login/LOGOUT',
  LOGIN_ERROR = '@login/LOGIN_ERROR',
}

export type Usuario = {
  email: string;
  senha: string;
};

export type LoginState = {
  isLogged: boolean;
  isLoading: boolean;
  currentUser: Usuario | undefined;
  email: string;
  error?: Error;
};

export type LoginAction<Payload> = {
  type: LoginTypes;
  payload: Payload;
};

export type LoginReducer = (
  state: LoginState,
  actions: LoginAction<LoginState>,
) => LoginState;
