import React from 'react';

import { Item } from './styles';

interface Props {
  nome: string;
  categoria: string;
  dataInicio: string;
  dataFim: string;
}

const CampanhaItem = ({ nome, categoria, dataInicio, dataFim }: Props) => {
  return (
    <Item>
      {nome} | {categoria} | {dataInicio} | {dataFim}
    </Item>
  );
};

export default CampanhaItem;
