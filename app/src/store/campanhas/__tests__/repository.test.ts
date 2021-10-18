import {CampanhaBuildMock} from '../__mocks__/CampanhaBuildMock.mock';
import {} from '../types';
import {buscaCampanhaQuery} from '../repository';
import {createMockClient} from '@apollo/client/testing';

describe('Repository Campanha', () => {
  const mockData = new CampanhaBuildMock()
    .withId('12345')
    .withNome('Teste Campanha')
    .build();

  it('Query listaTodasCampanhas', async () => {
    const fnQuery = createMockClient([mockData], buscaCampanhaQuery);
    const {data} = await fnQuery.query({query: buscaCampanhaQuery});
    expect(data).toEqual([mockData]);
  });
});
