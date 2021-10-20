import React from 'react';
import { render } from '@testing-library/react';

import { InputCustomizado } from '../styles';

describe('Componente de input', () => {
  const onChange = jest.fn();

  it('recebe as props corretamente', () => {
    const { getByPlaceholderText } = render(
      <InputCustomizado
        name="nome"
        type="text"
        value={'Claro'}
        onChange={onChange}
        placeholder="Campanha"
      />,
    );

    expect(getByPlaceholderText('Campanha')).toBeTruthy();
  });
});
