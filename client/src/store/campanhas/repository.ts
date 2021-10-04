import { gql } from '@apollo/client';

import { api } from 'src/api';
import { Campanha, CampanhaForm, ListaCampanhas } from './types';

const buscaCampanhaQuery = gql`
  query {
    buscaCampanhas {
      id
      nome
      descricao
      categoria
      dataInicio
      dataFim
      createdAt
      updatedAt
    }
  }
`;

const addCampanhaMutation = gql`
  mutation ($data: CampanhaForm!) {
    adicionarCampanha(data: $data) {
      id
    }
  }
`;

const updateCampanhaMutation = gql`
  mutation ($data: CampanhaForm!, $id: String!) {
    atualizarCampanha(data: $data, id: $id)
  }
`;

const buscaCampanhaPorIdQuery = gql`
  query ($buscaPorIdId: String!) {
    buscaCampanhaPorId(id: $buscaPorIdId) {
      id
      nome
      descricao
      categoria
      imagem
      dataInicio
      dataFim
    }
  }
`;

const deletaCampanhaMutation = gql`
  mutation ($id: String!) {
    deletarCampanha(id: $id) {
      nome
    }
  }
`;

async function listaTodasCampanhas(): Promise<ListaCampanhas> {
  const getListaCampanhas = await api.query({
    query: buscaCampanhaQuery,
  });
  return getListaCampanhas.data.buscaCampanhas;
}

async function buscaPorId(id: string): Promise<Campanha> {
  try {
    const campanha = await api.query({
      query: buscaCampanhaPorIdQuery,
      variables: { id },
    });
    return campanha.data;
  } catch (e: any) {
    return e.message;
  }
}

async function criaNovaCampanha(data: CampanhaForm) {
  try {
    const novaCampanha = await api.mutate({
      mutation: addCampanhaMutation,
      variables: { data },
    });
    if (novaCampanha.data) {
      return novaCampanha.data;
    } else {
      return novaCampanha.errors;
    }
  } catch (e: any) {
    return e.message;
  }
}

async function atualizaCampanha(id: string, data: CampanhaForm) {
  try {
    const campanhaAtualizada = await api.mutate({
      mutation: updateCampanhaMutation,
      variables: { id, data },
    });
    if (campanhaAtualizada.data) {
      return campanhaAtualizada.data;
    } else {
      return campanhaAtualizada.errors;
    }
  } catch (e: any) {
    return e.message;
  }
}

async function deletaCampanha(id: string) {
  try {
    const campanhaDeletada = await api.mutate({
      mutation: deletaCampanhaMutation,
      variables: { id },
    });
    if (campanhaDeletada.data) {
      return campanhaDeletada.data;
    } else {
      return campanhaDeletada.errors;
    }
  } catch (e: any) {
    return e.message;
  }
}

export {
  listaTodasCampanhas,
  criaNovaCampanha,
  atualizaCampanha,
  buscaPorId,
  deletaCampanha,
};
