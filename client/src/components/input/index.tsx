import React, { ChangeEventHandler } from 'react';

import { InputCustomizado } from './styles';

interface Props {
  type: string;
  placeholder: string;
  onchange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ type, placeholder, onchange }: Props) => {
  return (
    <InputCustomizado
      type={type}
      placeholder={placeholder}
      onChange={onchange}
    />
  );
};
