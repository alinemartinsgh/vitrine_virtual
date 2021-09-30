import { Usuario } from './types';
import { api } from 'src/api';
import { gql } from '@apollo/client';

const login = gql`
  mutation ($data: LoginInput!) {
    Login(data: data) {
      accessToken
    }
  }
`;

async function Login(data: Usuario) {
  const token = await api.mutate({ mutation: login });
  return token;
}

export { Login };
