import { buildSchema } from 'type-graphql';

import { UsuarioResolver } from '../vitrine_virtual_db/usuarios/resolvers';

export const createSchema = () =>
  buildSchema({
    resolvers: [UsuarioResolver],
  });
