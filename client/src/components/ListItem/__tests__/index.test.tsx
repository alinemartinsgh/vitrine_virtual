import React from 'react';
import { render } from '@testing-library/react';

import { ListItem } from '..';

describe('Componente de input', () => {
  it('recebe as props e renderiza os textos', () => {
    const { getAllByRole } = render(
      <ListItem
        nome="Netflix"
        categoria="Tv"
        dataInicio="21/09/2021"
        dataFim="25/09/2021"
      />,
    );

    expect(getAllByRole('cell')).toBeTruthy();
  });
});
