import { IsEmail } from 'class-validator';
import { Field, InputType } from 'type-graphql';
import { Password } from './Password';

@InputType()
export class AdicionarUsuarioInput extends Password(class {}) {
  @Field()
  isAdmin: boolean;

  @Field()
  @IsEmail()
  email: string;
}
