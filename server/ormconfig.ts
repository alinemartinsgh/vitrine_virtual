import { URL } from './src/utils/config';

module.exports = {
  type: 'mongodb',
  url: URL,
  useNewUrlParser: true,
  synchronize: true,
  entities: ['./src/vitrine_virtual_db/entities/*.ts'],
};
