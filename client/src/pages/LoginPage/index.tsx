import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../store/login/selectors';
import { loginActions } from '../../store/login';

interface loginPageProps {}

const LoginPage: React.FC<loginPageProps> = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectors.getCurrentUser);
  console.log(users);

  const handleLogin = (email: string, senha: string) => {
    dispatch(loginActions.requestLoginEmailPassword(email, senha));
  };

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <label>
        Email:
        <input type="text" name="email" />
      </label>
      <label>
        Senha:
        <input type="text" name="senha" />
      </label>
      <input
        type="submit"
        value="Enviar"
        onClick={() => {
          handleLogin('admin@gmail.com', '12345');
        }}
      />
    </form>
  );
};

export default LoginPage;
