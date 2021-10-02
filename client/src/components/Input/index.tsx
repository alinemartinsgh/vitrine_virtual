import React from 'react';
import InputProps from './InputPropsInterface';
import { CampoInput, InputDiv, InputLabel } from './style';

const Input = ({ name, type, labelCampanha, value }: InputProps) => {
  return (
    <InputDiv>
      <InputLabel htmlFor={name}>{labelCampanha}/</InputLabel>
      <CampoInput
        name={name}
        type={type}
        id={name}
        value={value}
      />
    </InputDiv>
  );
};

export default Input;
