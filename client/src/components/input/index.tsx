import React, { ChangeEventHandler } from 'react';

import { InputCustomizado } from './styles';

interface Props {
  type: string;
  placeholder: string;
  nome: string;
  onchange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ nome, type, placeholder, onchange }: Props) => {
  return (
    <InputCustomizado
      name={nome}
      type={type}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
};
