import { buildSchema } from 'type-graphql';
import { CampanhaResolver } from './campanhas/resolvers';
import { UsuarioResolver } from './usuarios/resolvers';
import { LoginResolver } from './usuarios/loginResolver';
import { GraphQLSchema } from 'graphql';

const Schema = async (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [CampanhaResolver, UsuarioResolver, LoginResolver],
  });

export default Schema;
