import { api } from 'src/api';
import { gql } from '@apollo/client';

const LoginEmailSenha = async (email: string, senha: string) => {
  return await api.mutate({
    mutation: gql`
      mutation ($data: LoginInput!) {
        Login(data: $data) {
          accessToken
        }
      }
    `,
    variables: { data: { email, senha } },
  });
};

export { LoginEmailSenha };
