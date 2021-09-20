import { Field, InputType } from 'type-graphql';
//import { Usuario } from '../../entity/Usuario';

@InputType()
export class AdicionarCampanhaInput {
  @Field({ nullable: false })
  nome: string;

  @Field({ nullable: false })
  descricao: string;

  @Field({ nullable: false })
  categoria: string;

  @Field({ nullable: false })
  imagem: string;

  @Field({ nullable: false })
  dataInicio: Date;

  @Field({ nullable: false })
  dataFim: Date;

  //@Field({ nullable: false })
  //criadoPor: Usuario;

  @Field({ nullable: true })
  createdAt: Date;

  @Field({ nullable: true })
  updatedAt: Date;
}
