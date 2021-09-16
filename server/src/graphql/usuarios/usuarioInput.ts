import { IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { Senha } from './Password';

@InputType()
export class AdicionarUsuarioInput extends Senha(class {}) {
  @Field()
  isAdmin: boolean;

  @Field()
  @IsEmail()
  email: string;
}
