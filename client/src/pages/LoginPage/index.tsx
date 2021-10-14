import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../store/login';
import * as selectors from '../../store/login/selectors';

import {
  Container,
  InputContainer,
  BotaoContainer,
  ReguaHorizontal,
  IconeContainer,
  TituloBemVindo,
  FormContainer,
} from './styles';

import { Input } from '../../components/input';
import { Botao } from '../../components/botao';
import { Icone } from '../../components/icone';

const LoginPage: React.FC = () => {
  const [dadosLogin, setDadosLogin] = useState({
    email: '',
    senha: '',
  });

  const erroLogin = useSelector(selectors.getError);

  function handleInput(e: any) {
    setDadosLogin({
      ...dadosLogin,
      [e.target.name]: e.target.value,
    });
  }

  const dispatch = useDispatch();

  const HitssPath = '../../../assets/img/hitss.svg';
  const ClaroPath = '../../../assets/img/logotipo_da_empresa_claro.svg';

  const handleLogin = (e: any): void => {
    e.preventDefault();
    dispatch(
      loginActions.requestLoginEmailPassword(
        dadosLogin.email,
        dadosLogin.senha,
      ),
    );
  };

  return (
    <Container>
      <TituloBemVindo> Seja bem vindo! </TituloBemVindo>
      <FormContainer onSubmit={handleLogin} method="POST">
        <InputContainer>
          <Input
            nome="email"
            type="text"
            placeholder="Email"
            value={dadosLogin.email}
            onchange={handleInput}
          />
          <Input
            nome="senha"
            type="password"
            placeholder="Senha"
            value={dadosLogin.senha}
            onchange={handleInput}
          />
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
      {erroLogin !== undefined ? <div>{erroLogin.message}</div> : null}
    </Container>
  );
};

export default LoginPage;
