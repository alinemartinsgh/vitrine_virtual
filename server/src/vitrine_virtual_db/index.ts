import mongoose from 'mongoose';
import { BD, SENHA } from '../utils/config';

const mongodb = mongoose.connect(
  `mongodb+srv://admin:${SENHA}@cluster0.lxtww.mongodb.net/${BD}?retryWrites=true&w=majority`,
);

export default mongodb;
