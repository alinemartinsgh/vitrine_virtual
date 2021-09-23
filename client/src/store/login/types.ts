export enum LoginTypes {
  LOGIN = '@login/LOGIN',
  REQUEST_EMAIL_PASSWORD = '@login/REQUEST_EMAIL_PASSWORD',
  LOGOUT = '@login/LOGOUT',
  LOGIN_ERROR = '@login/LOGIN_ERROR',
}

export type LoginState = {
  isLogged: boolean;
  isLoading: boolean;
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

export interface LoginForm {
  email: string;
  password: string;
}
