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
  const HitssPath = '../../../assets/img/hitss.svg';
  const ClaroPath = '../../../assets/img/logotipo_da_empresa_claro.svg'



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
        <Icone image={HitssPath} />
        <Icone image={ClaroPath} />
      </IconeContainer>
    </Container>
  );
};
