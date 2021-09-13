import { Schema, model } from 'mongoose';
import UsuarioModel from '../usuarios/schemaMongo';
import { ICampanhaDocument } from './interface';

const CampanhaSchema: Schema<ICampanhaDocument> = new Schema({
  nome: String,
  descricao: String,
  categoria: String,
  imagem: String,
  dataInicio: Date,
  dataFim: Date,
  criadoPor: UsuarioModel,
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

const CampanhaModel = model<ICampanhaDocument>('Campanha', CampanhaSchema);

export default CampanhaModel;
