import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/login';

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
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [dadosLogin, setDadosLogin] = useState({
    email: '',
    senha: '',
  });

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
    const envio = dispatch(
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
    </Container>
  );
};

export default LoginPage;
