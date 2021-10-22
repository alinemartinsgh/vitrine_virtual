import { api } from '../../api/';
import { gql } from '@apollo/client';

export const LoginMutation = gql`
  mutation ($data: LoginInput!) {
    Login(data: $data) {
      accessToken
    }
  }
`;

const LoginEmailSenha = async (email: string, senha: string) => {
  return api.mutate({
    mutation: LoginMutation,
    variables: { data: { email, senha } },
  });
};

export { LoginEmailSenha };
