import { MinLength } from 'class-validator';
import { Field, InputType, ClassType } from 'type-graphql';

export const Password = <T extends ClassType>(BaseClass: T): ClassType => {
  @InputType()
  class PasswordInput extends BaseClass {
    @Field()
    @MinLength(5)
    senha: string;
  }
  return PasswordInput;
};
