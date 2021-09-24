import { Arg, Query, Resolver, Mutation } from 'type-graphql';
import { getRepository } from 'typeorm';
import Campanha from '../../entity/Campanha';

import { AdicionarCampanhaInput } from '../campanhas/campanhaInput';

@Resolver()
export class CampanhaResolver {
  @Query(() => [Campanha])
  async buscaCampanhas(): Promise<Campanha[]> {
    return Campanha.find();
  }

  @Query(() => Campanha, { nullable: true })
  async buscaCampanhaPorId(
    @Arg('id') id: string,
  ): Promise<Campanha | undefined | null> {
    return Campanha.findOne(id);
  }

  @Mutation(() => Campanha)
  async adicionarCampanha(
    @Arg('data')
    {
      nome,
      descricao,
      categoria,
      imagem,
      dataInicio,
      dataFim,
      //criadoPor,
      createdAt,
      updatedAt,
    }: AdicionarCampanhaInput,
  ): Promise<Campanha> {
    const campanha = await Campanha.create({
      nome,
      categoria,
      createdAt,
      //criadoPor,
      dataFim,
      dataInicio,
      descricao,
      imagem,
      updatedAt,
    }).save();
    return campanha;
  }

  @Mutation(() => Campanha)
  async atualizarCampanha(
    @Arg('id') id: string,
    @Arg('data')
    {
      nome,
      descricao,
      categoria,
      imagem,
      dataInicio,
      dataFim,
      //criadoPor,
      createdAt,
      updatedAt,
    }: AdicionarCampanhaInput,
  ): Promise<Campanha | null> {
    const campanha = await Campanha.findOne(id);

    if (campanha) {
      campanha.nome = nome;
      campanha.descricao = descricao;
      campanha.categoria = categoria;
      campanha.imagem = imagem;
      campanha.dataInicio = dataInicio;
      campanha.dataFim = dataFim;
      campanha.createdAt = createdAt;
      campanha.updatedAt = updatedAt;

      await getRepository(Campanha).update(id, campanha);
      return campanha;
    }

    return null;
  }

  @Mutation(() => Campanha, { nullable: true })
  async deletarCampanha(
    @Arg('id') id: string,
  ): Promise<Campanha | undefined | null> {
    const todasAsCampanhas = await getRepository(Campanha);
    const campanha = await todasAsCampanhas.findOne(id);

    if (campanha) {
      await todasAsCampanhas.delete(id);
      return campanha;
    }
    return null;
  }
}
