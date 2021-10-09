import React, { MouseEventHandler } from 'react';

import { BotaoCustomizado } from './styles';

interface Props {
  conteudo: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  onSubmit?: () => void;
}

export const Botao = ({ conteudo, type, onClick, onSubmit }: Props) => {
  return (
    <BotaoCustomizado type={type} onClick={onClick} onSubmit={onSubmit}>
      {conteudo}
    </BotaoCustomizado>
  );
};
