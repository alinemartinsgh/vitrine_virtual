import {api} from '../../api/';
import {gql} from '@apollo/client';

const LoginEmailSenha = async (email: string, senha: string) => {
  return await api.mutate({
    mutation: gql`
      mutation ($data: LoginInput!) {
        Login(data: $data) {
          accessToken
        }
      }
    `,
    variables: {data: {email, senha}},
  });
};

/*
const Me = async (token: string) => {
  return await api.query({
    query: gql`
        Me
    `,
  });
};
*/

export {LoginEmailSenha};
