import React, { MouseEventHandler } from 'react';

import { BotaoCustomizado } from './styles';

interface Props {
  conteudo: string;
  type: 'submit' | 'button';
  enviarForm?: MouseEventHandler<HTMLButtonElement>;
}

export const Botao = ({ conteudo, type, enviarForm }: Props) => {
  return (
    <BotaoCustomizado type={type} onClick={enviarForm}>
      {conteudo}
    </BotaoCustomizado>
  );
};
