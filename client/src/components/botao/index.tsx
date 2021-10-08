import React, { MouseEventHandler } from 'react';

import { BotaoCustomizado } from './styles';

interface Props {
  conteudo: string;
  type: 'submit' | 'button';
  onClick?: () => void;
}

export const Botao = ({ conteudo, type, onClick }: Props) => {
  return (
    <BotaoCustomizado type={type} onClick={onClick}>
      {conteudo}
    </BotaoCustomizado>
  );
};
