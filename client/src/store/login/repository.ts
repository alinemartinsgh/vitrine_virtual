import { api } from 'src/api';
import { FetchResult, gql } from '@apollo/client';

export interface LoginResponse {
  data: Promise<any>;
  context: unknown;
  email: '';
  senha: '';
}

const parameters = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // body: JSON.stringify(email, senha),
};

const LoginEmailSenha = async (email: string, senha: string) => {
  return await api.mutate({
    mutation: gql`
      mutation ($data: LoginInput!) {
        Login(data: $data) {
          accessToken
        }
      }
    `,
    variables: { data: { email, senha }},
  });
};

export { LoginEmailSenha };
