const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY';
export const setToken = (token: string | null) =>
  window.localStorage.setItem(ACCESS_TOKEN_KEY, token ?? '');
export const getToken = () => window.localStorage.getItem(ACCESS_TOKEN_KEY);
