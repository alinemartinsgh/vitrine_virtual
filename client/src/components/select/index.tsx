import React, { ChangeEventHandler } from 'react';
import { SelectItem } from './style';

import Categorias from './Categorias';

interface Props {
  name: string;
  value?: string;
  defaultValue?: string;
  onchange: ChangeEventHandler<HTMLSelectElement>;
}

export const Select = ({ name, onchange, value, defaultValue }: Props) => {
  return (
    <SelectItem
      onChange={onchange}
      name={name}
      value={value}
      defaultValue={defaultValue}
      required
      data-testid="select-option"
    >
      <option value="" disabled hidden>
        Selecione...
      </option>
      {Categorias.map((item, index) => (
        <option value={item} key={index} defaultValue={defaultValue}>
          {item}
        </option>
      ))}
    </SelectItem>
  );
};
