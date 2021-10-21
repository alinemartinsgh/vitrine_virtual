import { gql } from '@apollo/client';

import { api } from 'src/api';
import { CampanhaForm, ListaCampanhas } from './types';

export const buscaCampanhaQuery = gql`
  query {
    buscaCampanhas {
      id
      nome
      descricao
      categoria
      urlDestino
      imagem
      dataInicio
      dataFim
      createdAt
      updatedAt
    }
  }
`;

export const addCampanhaMutation = gql`
  mutation ($data: CampanhaForm!) {
    adicionarCampanha(data: $data) {
      nome
      descricao
      categoria
      urlDestino
      imagem
      dataInicio
      dataFim
    }
  }
`;

export const updateCampanhaMutation = gql`
  mutation ($data: CampanhaForm!, $id: String!) {
    atualizarCampanha(data: $data, id: $id) {
      nome
      descricao
      categoria
      urlDestino
      imagem
      dataInicio
      dataFim
    }
  }
`;

export const deletaCampanhaMutation = gql`
  mutation ($id: String!) {
    deletarCampanha(id: $id) {
      nome
    }
  }
`;

async function listaTodasCampanhas(): Promise<ListaCampanhas> {
  const listaCampanhas = await api.query({
    query: buscaCampanhaQuery,
    fetchPolicy: 'network-only',
  });
  return listaCampanhas.data.buscaCampanhas;
}

async function criaNovaCampanha(data: CampanhaForm) {
  const novaCampanha = await api.mutate({
    mutation: addCampanhaMutation,
    variables: { data },
    fetchPolicy: 'network-only',
  });
  if (novaCampanha.data) {
    return novaCampanha.data;
  } else {
    return novaCampanha.errors;
  }
}

async function atualizaCampanha(id: string, data: CampanhaForm) {
  const campanhaAtualizada = await api.mutate({
    mutation: updateCampanhaMutation,
    variables: { id, data },
    fetchPolicy: 'network-only',
  });
  if (campanhaAtualizada.data) {
    return campanhaAtualizada.data;
  } else {
    return campanhaAtualizada.errors;
  }
}

async function deletaCampanha(id: string) {
  const campanhaDeletada = await api.mutate({
    mutation: deletaCampanhaMutation,
    variables: { id },
    fetchPolicy: 'network-only',
  });
  if (campanhaDeletada.data) {
    return campanhaDeletada.data;
  } else {
    return campanhaDeletada.errors;
  }
}

export {
  listaTodasCampanhas,
  criaNovaCampanha,
  atualizaCampanha,
  deletaCampanha,
};
