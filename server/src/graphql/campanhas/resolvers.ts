import { Query, Resolver } from 'type-graphql';
import Campanha from '../../entity/Campanha';

@Resolver()
export class CampanhaResolver {
  @Query(() => [Campanha])
  async buscaCampanhas(): Promise<Campanha[]> {
    return Campanha.find();
  }
}
