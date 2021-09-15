import { Connection } from 'typeorm';
import faker from 'faker';

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
  $isAdmin: Boolean!
  $senha: String!
  $login: String!
) {
  addUsuario(
    isAdmin: $isAdmin
    senha: $senha
    login: $login
  ) {
    login
    senha
    isAdmin
  }
}`;

describe('Registro de usuário', () => {
  it('criar usuário', async () => {
    const usuario = {
      isAdmin: faker.datatype.boolean(),
      login: faker.internet.userName(),
      senha: faker.internet.password(),
    };

    const resposta = await gCall({
      source: registerMutation,
      variableValues: {
        data: usuario,
      },
    });

    expect(resposta).toMatchObject({
      data: {
        isAdmin: usuario.isAdmin,
        login: usuario.login,
        senha: usuario.senha,
      },
    });
  });
});
