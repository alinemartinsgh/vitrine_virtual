import { Entity, BaseEntity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
class Usuario extends BaseEntity {
  @Field(() => ID, { nullable: false })
  @ObjectIdColumn()
  _id!: ObjectID;

  @Field({ nullable: false })
  @Column()
  login!: string;

  @Field({ nullable: false })
  @Column()
  senha!: string;

  @Field({ nullable: false })
  @Column()
  isAdmin!: boolean;
}

export default Usuario;
