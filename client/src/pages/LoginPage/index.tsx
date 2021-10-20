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
  IconClaro,
  IconHitss,
} from './styles';

import { Input, Button } from '../../components';

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
            name="email"
            type="text"
            placeholder="Email"
            value={dadosLogin.email}
            onchange={handleInput}
          />
          <Input
            name="senha"
            type="password"
            placeholder="Senha"
            value={dadosLogin.senha}
            onchange={handleInput}
          />
        </InputContainer>
        <ReguaHorizontal />
        <BotaoContainer>
          <Button bgColor="enviar" type="submit" content="Login" />
        </BotaoContainer>
      </FormContainer>
      <IconeContainer>
        <IconClaro />
        <IconHitss />
      </IconeContainer>
      {erroLogin !== undefined ? <div>{erroLogin.message}</div> : null}
    </Container>
  );
};

export default LoginPage;
