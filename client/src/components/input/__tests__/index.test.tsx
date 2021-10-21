import React from 'react';
import { render } from '@testing-library/react';

import { CustomInput } from '../styles';

describe('Componente de input', () => {
  const onChange = jest.fn();

  it('recebe as props corretamente', () => {
    const { getByPlaceholderText } = render(
      <CustomInput
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
