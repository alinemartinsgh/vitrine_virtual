import React from 'react';

import { BotaoCustomizado } from './styles';

interface Props {
  conteudo: string;
  type: 'submit' | 'button';
  onClick?: () => void;
  onSubmit?: () => void;
  bgColor: string;
}

export const Botao = ({
  conteudo,
  type,
  onClick,
  onSubmit,
  bgColor,
}: Props) => {
  return (
    <BotaoCustomizado
      type={type}
      bgColor={bgColor}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {conteudo}
    </BotaoCustomizado>
  );
};
