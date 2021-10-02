import { loginActions } from '.';
import { LoginAction, LoginState, LoginTypes, LoginReducer } from './types';

const initialState: LoginState = {
  isLogged: false,
  isLoading: false,
  currentUser: undefined,
  email: '',
  error: undefined,
};

const logout: LoginReducer = (state) => ({
  ...state,
  isLogged: false,
  currentUser: undefined,
  isLoading: false,
  error: undefined,
});

const login: LoginReducer = (state, action) => {
  const { payload } = action as unknown as ReturnType<
    typeof loginActions.login
  >;

  return {
    ...state,
    isLogged: true,
    isLoading: false,
    error: undefined,
    token: payload.token,
  };
};

const requestEmailPassword: LoginReducer = (state) => ({
  ...state,
  isLogged: false,
  isLoading: false,
});

const loginError: LoginReducer = (state, action) => {
  const { payload } = action as ReturnType<typeof loginActions.loginError>;

  return {
    ...state,
    isLoading: false,
    error: payload.error,
  };
};

const loginReducerMap = new Map<LoginTypes, LoginReducer>([
  [LoginTypes.LOGOUT, logout],
  [LoginTypes.REQUEST_EMAIL_PASSWORD, requestEmailPassword],
  [LoginTypes.LOGIN, login],
  [LoginTypes.LOGIN_ERROR, loginError],
]);

const reducer = (
  state: LoginState = initialState,
  action: LoginAction<LoginState>,
): LoginState => {
  const loginReducer = loginReducerMap.get(action.type);
  if (loginReducer) return loginReducer(state, action);
  return state;
};

export default reducer;
