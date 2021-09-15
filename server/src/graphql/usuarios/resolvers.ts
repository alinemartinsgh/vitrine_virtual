import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Usuario } from '../../entity/Usuario';

@Resolver()
export class UsuarioResolver {
  @Query(() => [Usuario])
  async buscaUsuarios(): Promise<Usuario[]> {
    return Usuario.find();
  }

  @Query(() => Usuario)
  async buscaUsuarioPorId(
    @Arg('usuarioId') usuarioId: string,
  ): Promise<Usuario | undefined | null> {
    return await Usuario.findOne(usuarioId);
  }

  @Mutation(() => Usuario)
  async addUsuario(
    @Arg('login') login: string,
    @Arg('senha') senha: string,
    @Arg('isAdmin') isAdmin: boolean,
  ): Promise<Usuario> {
    const usuario = await Usuario.create({
      login,
      senha,
      isAdmin,
    }).save();
    return usuario;
  }
}
