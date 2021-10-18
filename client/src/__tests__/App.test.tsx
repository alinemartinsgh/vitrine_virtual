import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renderizar componente App com texto vitrine virtual', () => {
  render(<App />);
  const texto = screen.getByText(/bem vindo/i);
  expect(texto).toBeInTheDocument();
});
