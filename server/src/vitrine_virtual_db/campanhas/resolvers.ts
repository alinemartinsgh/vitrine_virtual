import { Query, Resolver } from 'type-graphql';
import Campanha from '../../entities/campanha';

@Resolver()
export class CampanhaResolver {
  @Query(() => [Campanha])
  async buscaCampanhas(): Promise<Campanha[]> {
    return Campanha.find();
  }
}
