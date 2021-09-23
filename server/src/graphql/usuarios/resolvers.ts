import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { Usuario } from '../../entity/Usuario';
import { AdicionarUsuarioInput } from './usuarioInput';

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
  async adicionarUsuario(
    @Arg('data')
    { email, senha, isAdmin }: AdicionarUsuarioInput,
  ): Promise<Usuario> {
    const usuario = await Usuario.create({
      email,
      senha,
      isAdmin,
    }).save();
    return usuario;
  }
}
