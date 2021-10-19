/* eslint-disable jest/no-mocks-import */
import { LoginBuilderMock } from '../__mocks__/login.mock';

import { LoginMutation } from '../repository';

import { createMockClient } from '@apollo/client/testing';

describe('Repository Login', () => {
  const mockLogin = new LoginBuilderMock()
    .withEmail('admin@gmail.com')
    .withSenha('12345');

  test('Mutation login', async () => {
    const mockApollo = createMockClient(mockLogin, LoginMutation, mockLogin);
    const { data } = await mockApollo.mutate({
      mutation: LoginMutation,
      variables: mockLogin,
    });
    expect(data).toEqual(mockLogin);
  });
});
