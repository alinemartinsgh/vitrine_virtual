import React from 'react';

interface loginPageProps {}

const LoginPage: React.FC<loginPageProps> = () => {
  return (
    <form>
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
          console.log('olaaa');
        }}
      />
    </form>
  );
};

export default LoginPage;
