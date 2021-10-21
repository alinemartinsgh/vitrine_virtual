import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { CustomizedButton } from '../styles';

describe('Componente de input', () => {
  const onClick = jest.fn();
  const onSubmit = jest.fn();

  it('recebe as props corretamente e clicar no botão', () => {
    const { getByRole } = render(
      <CustomizedButton
        type="button"
        onClick={onClick}
        onSubmit={onSubmit}
        bgColor={'red'}
        role="button"
      />,
    );

    expect(getByRole('button')).toBeTruthy();
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('recebe as props corretamente enviar o form', () => {
    const { getByRole } = render(
      <CustomizedButton
        type="submit"
        onClick={onClick}
        onSubmit={onSubmit}
        bgColor={'red'}
        role="submit"
      />,
    );

    expect(getByRole('submit')).toBeTruthy();
    fireEvent.submit(getByRole('submit'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
