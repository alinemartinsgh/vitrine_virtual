import React from 'react';

import { BotaoCustomizado } from './styles';

interface Props {
  conteudo: string;
  type: 'submit' | 'button';
  enviarForm?: () => {};
}

export const Botao = ({ conteudo, type, enviarForm }: Props) => {
  return (
    <BotaoCustomizado type={type} onClick={enviarForm}>
      {conteudo}
    </BotaoCustomizado>
  );
};
