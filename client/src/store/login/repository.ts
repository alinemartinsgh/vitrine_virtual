import { api } from 'src/api';
import { gql } from '@apollo/client';

export interface LoginResponse {
  data: Promise<any>;
  context: unknown;
  email: '';
  senha: '';
}

const login = gql`
  mutation ($data: LoginInput!) {
    Login(data: data) {
      accessToken
    }
  }
`;

const Login = async () => {
  const retorno = await api.mutate({ mutation: login });
  return retorno;
};

export { Login };
