import { Usuario } from '../types';

export class LoginBuilderMock {
  email = '';
  senha = '';

  withEmail(email: string) {
    this.email = email;
    return this;
  }

  withSenha(senha: string) {
    this.senha = senha;
    return this;
  }

  build = (): Usuario => {
    return {
      email: this.email,
      senha: this.senha,
    };
  };
}
