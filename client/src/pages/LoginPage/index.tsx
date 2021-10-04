import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../store/login/selectors';
import { loginActions } from '../../store/login';

import { FormularioLogin } from '../../components/formularioLogin';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectors.getCurrentUser);
  console.log(users);

  const handleLogin = (email: string, senha: string): any => {
    dispatch(loginActions.requestLoginEmailPassword(email, senha));
  };

  return (
    <FormularioLogin onClick={handleLogin('admin@gmail.com', '12345')} />
  );
};

export default LoginPage;
