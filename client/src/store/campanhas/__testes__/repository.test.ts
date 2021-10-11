/* eslint-disable jest/no-mocks-import */
import { CampanhaBuilderMock } from '../__mocks__/campanha.mock';
import { CampanhaFormBuilderMock } from '../__mocks__/campanhaForm.mock ';
import {} from '../types';
import {
  buscaCampanhaQuery,
  addCampanhaMutation,
  updateCampanhaMutation,
  deletaCampanhaMutation,
} from '../repository';
import { createMockClient } from '@apollo/client/testing';

describe('Repository Campanha', () => {
  const mockCampanha = new CampanhaBuilderMock()
    .withId('12345')
    .withNome('Teste Campanha')
    .build();

  const mockCampanhaForm = new CampanhaFormBuilderMock()
    .withNome('Teste Campanha')
    .build();

  it('Query listaTodasCampanhas', async () => {
    const mockApollo = createMockClient([mockCampanha], buscaCampanhaQuery);
    const { data } = await mockApollo.query({
      query: buscaCampanhaQuery,
    });
    expect(data).toEqual([mockCampanha]);
  });

  it('Mutation criaNovaCampanha', async () => {
    const mockApollo = createMockClient(
      mockCampanhaForm,
      addCampanhaMutation,
      mockCampanhaForm,
    );
    const { data } = await mockApollo.mutate({
      mutation: addCampanhaMutation,
      variables: mockCampanhaForm,
    });
    expect(data).toEqual(mockCampanhaForm);
  });

  it('Mutation atualizaCampanha', async () => {
    const mockApollo = createMockClient(
      mockCampanha,
      updateCampanhaMutation,
      mockCampanhaForm,
    );
    const { data } = await mockApollo.mutate({
      mutation: updateCampanhaMutation,
      variables: { id: '12345', mockCampanhaForm },
    });
    expect(data).toEqual(mockCampanhaForm);
  });
});
