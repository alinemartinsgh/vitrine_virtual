import React from 'react';

import { InputCustomizado } from './styles';

interface Props {
  type: string;
  placeholder: string;
}

export const Input = ({ type, placeholder }: Props) => {
  return <InputCustomizado type={type} placeholder={placeholder} />;
};
