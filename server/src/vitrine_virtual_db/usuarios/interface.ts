import { Document } from 'mongoose';

export interface IUsuario {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _id?: any;
  login: string;
  senha: string;
  isAdmin: boolean;
}

export interface IUsuarioDocument extends IUsuario, Document {}
