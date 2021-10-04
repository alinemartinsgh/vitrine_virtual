import React, { MouseEventHandler } from 'react';


import { BotaoCustomizado } from './styles';

interface Props {
  conteudo: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Botao = ({ conteudo, onClick }: Props) => {
  return <BotaoCustomizado onClick={onClick}>{conteudo}</BotaoCustomizado>;
};
