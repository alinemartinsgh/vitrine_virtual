import React, { MouseEventHandler } from 'react';

import {
  Container,
  InputContainer,
  BotaoContainer,
  ReguaHorizontal,
  IconeContainer,
  TituloBemVindo,
} from './styles';

import { Input } from '../input';
import { Botao } from '../botao';
import { Icone } from '../icone';

interface Props {
  onClick: MouseEventHandler<HTMLInputElement> | undefined;
}

export const FormularioLogin = ({ onClick }: Props) => {
  return (
    <Container>
      <TituloBemVindo> Seja bem vindo! </TituloBemVindo>
      <InputContainer>
        <Input type="text" placeholder="Email" />
        <Input type="text" placeholder="Senha" />
      </InputContainer>
      <ReguaHorizontal />
      <BotaoContainer>
        <Botao conteudo="Login" />
      </BotaoContainer>
      <IconeContainer>
        <Icone image={'../../../assets/img/hitss.jpeg'} />
        <Icone image={'../../../assets/img/claro.webp'} />
      </IconeContainer>
    </Container>
  );
};
