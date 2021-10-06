import React, { ChangeEventHandler } from 'react';

import { InputCustomizado } from './styles';

interface Props {
  type: string;
  placeholder?: string;
  nome: string;
  value?: string; // trocar para obrigatório depois
  onchange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ nome, type, placeholder, onchange, value }: Props) => {
  return (
    <InputCustomizado
      name={nome}
      type={type}
      placeholder={placeholder}
      onChange={onchange}
      value={value}
    />
  );
};
