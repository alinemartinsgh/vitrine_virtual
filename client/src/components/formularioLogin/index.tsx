import React, { MouseEventHandler } from 'react';

import {
  Container,
  InputContainer,
  BotaoContainer,
  ReguaHorizontal,
  IconeContainer,
  TituloBemVindo,
  FormContainer,
} from './styles';

import { Input } from '../input';
import { Botao } from '../botao';
import { Icone } from '../icone';

interface Props {
  onClick: MouseEventHandler<HTMLInputElement> | undefined;
}

export const FormularioLogin = ({ onClick }: Props) => {
  const HitssPath = '../../../assets/img/hitss.svg';
  const ClaroPath = '../../../assets/img/logotipo_da_empresa_claro.svg';

  return (
    <Container>
      <TituloBemVindo> Seja bem vindo! </TituloBemVindo>
      <FormContainer>
        <InputContainer>
          <Input nome="email" type="text" placeholder="Email" />
          <Input nome= "senha" type="text" placeholder="Senha" />
        </InputContainer>
        <ReguaHorizontal />
        <BotaoContainer>
          <Botao type="submit" conteudo="Login" />
        </BotaoContainer>
      </FormContainer>
      <IconeContainer>
        <Icone image={HitssPath} />
        <Icone image={ClaroPath} />
      </IconeContainer>
    </Container>
  );
};
