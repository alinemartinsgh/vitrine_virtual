import { gql } from '@apollo/client';

import { api } from 'src/api';
import { Campanha, CampanhaForm } from './types';

const buscaCampanhaQuery = gql`
  query {
    buscaCampanhas {
      id
      nome
      categoria
      dataInicio
      dataFim
    }
  }
`;

async function listaTodasCampanhas() {
  const getListaCampanhas = await api.query({
    query: buscaCampanhaQuery,
  });
  return getListaCampanhas;
}

async function buscaPorId(id: any) {
  const campanha = await api.query({
    query: gql`
    query {
      buscaCampanhaPorId(${id}){
        nome,
        descricao,
        categoria
        imagem,
        dataInicio,
        dataFim
      }
    }`,
  });
  return campanha;
}

async function criaNovaCampanha(data: CampanhaForm): Promise<Campanha> {
  const novaCampanha = await api.mutate({
    mutation: gql`
      mutation (data: ${data}){
        adicionarCampanha(data: ${data}) {
          id,
          nome,
          descricao,
          categoria
          imagem,
          dataInicio,
          dataFim,
          createdAt,
          updatedAt
        }
      }
    `,
  });
  return novaCampanha;
}

async function atualizaCampanha(id: any, data: Partial<CampanhaForm>) {
  await api.mutate({
    mutation: gql`
      mutation(id: ${id}, data: ${data}){
        atualizarCampanha(id: ${id}, data: ${data}){
          id,
          nome,
        }
      }
    `,
  });
}

export { listaTodasCampanhas, criaNovaCampanha, atualizaCampanha, buscaPorId };
