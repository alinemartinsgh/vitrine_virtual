import { Entity, BaseEntity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';
//import { Usuario } from './Usuario';

@ObjectType()
@Entity()
export class Campanha extends BaseEntity {
  @Field(() => ID, { nullable: false })
  @ObjectIdColumn()
  id: ObjectID;

  @Field({ nullable: false })
  @Column()
  nome: string;

  @Field({ nullable: false })
  @Column()
  descricao: string;

  @Field({ nullable: false })
  @Column()
  categoria: string;

  @Field({ nullable: false })
  @Column()
  imagem: string;

  @Field({ nullable: false })
  @Column()
  dataInicio: string;

  @Field({ nullable: false })
  @Column()
  dataFim: string;

  //@Field({ nullable: false })
  //@Column()
  //criadoPor: Usuario;

  @Field({ nullable: true })
  @Column()
  createdAt: string;

  @Field({ nullable: true })
  @Column()
  updatedAt: string;
}

export default Campanha;
