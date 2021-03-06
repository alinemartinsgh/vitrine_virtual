/* eslint-disable jest/no-mocks-import */
import { CampanhaBuilderMock } from '../__mocks__/campanha.mock';
import { CampanhaFormBuilderMock } from '../__mocks__/campanhaForm.mock ';
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

  test('Query listaTodasCampanhas', async () => {
    const mockApollo = createMockClient([mockCampanha], buscaCampanhaQuery);
    const { data } = await mockApollo.query({
      query: buscaCampanhaQuery,
    });
    expect(data).toEqual([mockCampanha]);
  });

  test('Mutation criaNovaCampanha', async () => {
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

  test('Mutation atualizaCampanha', async () => {
    const mockApollo = createMockClient(mockCampanha, updateCampanhaMutation, {
      id: '12345',
      mockCampanhaForm,
    });
    const { data } = await mockApollo.mutate({
      mutation: updateCampanhaMutation,
      variables: { id: '12345', mockCampanhaForm },
    });
    expect(data).toEqual(mockCampanha);
  });

  test('Mutation deletaCampanha', async () => {
    const mockApollo = createMockClient(mockCampanha, deletaCampanhaMutation, {
      id: '12345',
    });
    const { data } = await mockApollo.mutate({
      mutation: deletaCampanhaMutation,
      variables: {
        id: '12345',
      },
    });
    expect(data).toEqual(mockCampanha);
  });
});
