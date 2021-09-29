import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  UseMiddleware,
  Ctx,
} from 'type-graphql';
import { sign } from 'jsonwebtoken';
import { compare } from 'bcryptjs';
import { Usuario } from '../../entity/Usuario';
import { isAuth } from './isAuth';
import { MyContext } from './MyContext';

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class LoginResolver {
  @Query(() => String)
  @UseMiddleware(isAuth)
  async Me(@Ctx() { payload }: MyContext): Promise<string> {
    return `Id do usuario : ${payload!.userId}`;
  }

  /*
  @Mutation(() => Boolean)
  async Register(
    @Arg('email') email: string,
    @Arg('senha') senha: string,
    @Arg('isAdmin') isAdmin: boolean,
  ) {
    const hashedSenha = await hash(senha, 13);
    try {
      await Usuario.insert({
        email,
        senha: hashedSenha,
        isAdmin,
      });
    } catch (err) {
      console.log(err);
      return false;
    }

    return true;
  }
  */

  @Mutation(() => LoginResponse)
  async Login(
    @Arg('email') email: string,
    @Arg('senha') senha: string,
  ): Promise<{
    accessToken: string;
  }> {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      throw new Error('Could not find user');
    }

    const verify = await compare(senha, usuario.senha);

    if (!verify) {
      throw new Error('Bad password');
    }

    return {
      accessToken: sign({ userId: usuario.id }, 'MySecretKey', {
        expiresIn: '15m',
      }),
    };
  }
}
