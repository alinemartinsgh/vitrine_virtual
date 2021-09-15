import { Connection } from 'typeorm';

import { gCall } from '../../test-utils/gCall';
import { testConn } from '../../test-utils/testConn';

let conn: Connection;

beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation(
  $addUsuarioIsAdmin: Boolean!
  $addUsuarioSenha: String!
  $addUsuarioLogin: String!
) {
  addUsuario(
    isAdmin: $addUsuarioIsAdmin
    senha: $addUsuarioSenha
    login: $addUsuarioLogin
  ) {
    login
    senha
    isAdmin
  }
}`;

describe('Registrar', () => {
  it('create user', async () => {
    console.log(
      await gCall({
        source: registerMutation,
        variableValues: {
          addUsuarioIsAdmin: true,
          addUsuarioSenha: '123456',
          addUsuarioLogin: 'Leon',
        },
      }),
    );
  });
});
