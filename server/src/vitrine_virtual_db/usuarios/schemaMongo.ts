import { Schema, model } from 'mongoose';
import { IUsuarioDocument } from './interface';

const UsuarioSchema: Schema<IUsuarioDocument> = new Schema({
  login: String,
  senha: String,
  isAdmin: Boolean,
});

const UsuarioModel = model<IUsuarioDocument>('Usuario', UsuarioSchema);

export default UsuarioModel;
