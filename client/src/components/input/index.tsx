import React, { ChangeEventHandler } from 'react';

import { CustomInput } from './styles';

interface Props {
  type: string;
  placeholder?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onchange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  name,
  type,
  placeholder,
  onchange,
  value,
  defaultValue,
}: Props) => {
  return (
    <CustomInput
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onchange}
      value={value}
      defaultValue={defaultValue}
      required
    />
  );
};
