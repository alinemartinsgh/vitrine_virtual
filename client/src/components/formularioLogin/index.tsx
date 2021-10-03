import React, { MouseEventHandler } from 'react';

import { Container, InputContainer, BotaoContainer } from './styles';
import { Input } from '../input';
import { Botao } from '../botao';

interface Props {
  onClick: MouseEventHandler<HTMLInputElement> | undefined;
}

export const FormularioLogin = ({ onClick }: Props) => {
  return (
    <Container>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Senha" />
      </InputContainer>
      <BotaoContainer>
        <Botao conteudo="Login" />
      </BotaoContainer>
    </Container>
  );
};
