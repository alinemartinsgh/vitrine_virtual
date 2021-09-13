import { Query, Resolver } from 'type-graphql';
import Usuario from '../entities/usuario';

@Resolver()
export class UsuarioResolver {
  @Query(() => [Usuario])
  async buscaUsuarios(): Promise<Usuario[]> {
    return Usuario.find();
  }
}
