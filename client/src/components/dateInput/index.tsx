import React, { ChangeEventHandler } from 'react';

import {Container, Input, Label } from './style'

interface Props {
  labelText: string
  name: string;
  value?: string;
  defaultValue?: string;
  onchange: ChangeEventHandler<HTMLInputElement>;
}

export const DateInput = ({
  labelText,
  name,
  value,
  defaultValue,
  onchange,
}: Props) => {
  return (
    <Container>
      <Label>{labelText}</Label>
      <Input
        name={name}
        type="date"
        onChange={onchange}
        value={value}
        defaultValue={defaultValue}
        required
      />
    </Container>
  );
};
