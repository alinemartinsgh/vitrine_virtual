import { Connection } from 'typeorm';
import faker from 'faker';

import { gCall } from '../../test-utils/gCall';
import { testConn } from '../../test-utils/testConn';
import { Campanha } from '../../entity/Campanha';

let conn: Connection;

beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close();
});

const adicionarCampanhaMutation = `
mutation($data: AdicionarCampanhaInput!) {
  adicionarCampanha(data: $data) {
    categoria
    createdAt
    dataFim
    dataInicio
    descricao
    imagem
    nome
    updatedAt
  }
}
`;

describe('Registro de campanha', () => {
  it('cria campanha', async () => {
    const campanha = {
      nome: faker.name.jobType(),
      categoria: faker.commerce.department(),
      dataInicio: `${faker.date.recent()}`,
      dataFim: `${faker.date.future()}`,
      descricao: faker.company.catchPhraseAdjective(),
      imagem: faker.image.business(),
      createdAt: `${faker.date.past()}`,
      updatedAt: `${faker.date.soon()}`,
    };

    const resposta = await gCall({
      source: adicionarCampanhaMutation,
      variableValues: {
        data: campanha,
      },
    });

    expect(resposta).toMatchObject({
      data: {
        adicionarCampanha: {
          nome: campanha.nome,
          categoria: campanha.categoria,
          dataInicio: campanha.dataInicio,
          dataFim: campanha.dataFim,
          descricao: campanha.descricao,
          imagem: campanha.imagem,
          createdAt: campanha.createdAt,
          updatedAt: campanha.updatedAt,
        },
      },
    });
    const dbUser = await Campanha.findOne({ where: { nome: campanha.nome } });

    expect(dbUser).toBeDefined();
    expect(dbUser!.nome).toBe(campanha.nome);
    expect(dbUser!.categoria).toBe(campanha.categoria);
    expect(dbUser!.dataInicio).toBe(campanha.dataInicio);
    expect(dbUser!.dataFim).toBe(campanha.dataFim);
    expect(dbUser!.descricao).toBe(campanha.descricao);
    expect(dbUser!.imagem).toBe(campanha.imagem);
    expect(dbUser!.createdAt).toBe(campanha.createdAt);
    expect(dbUser!.updatedAt).toBe(campanha.updatedAt);
  });
});
