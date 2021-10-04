import React from 'react';

import { BotaoCustomizado } from './styles';

interface Props {
  conteudo: string;
}

export const Botao = ({ conteudo }: Props) => {
  return <BotaoCustomizado>{conteudo}</BotaoCustomizado>;
};
