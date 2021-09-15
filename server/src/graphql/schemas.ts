import { buildSchema } from 'type-graphql';
import { CampanhaResolver } from './campanhas/resolvers';
import { UsuarioResolver } from './usuarios/resolvers';

const Schema = async () =>
  await buildSchema({
    resolvers: [CampanhaResolver, UsuarioResolver],
  });

export default Schema;
