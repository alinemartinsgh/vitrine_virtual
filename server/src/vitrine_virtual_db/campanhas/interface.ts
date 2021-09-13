import { Document } from 'mongoose';
import { IUsuario } from '../usuarios/interface';

export interface ICampanha {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _id?: any;
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  dataInicio: Date;
  dataFim: Date;
  criadoPor: IUsuario;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICampanhaDocument extends ICampanha, Document {}
