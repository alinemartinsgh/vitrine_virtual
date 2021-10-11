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
      urlDestino
      dataInicio
      imagem
      dataFim
      createdAt
      urlDestino
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
    atualizarCampanha(data: $data, id: $id) {
      nome
    }
  }
`;

const buscaCampanhaPorIdQuery = gql`
  query ($buscaPorIdId: String!) {
    buscaCampanhaPorId(id: $buscaPorIdId) {
      id
      nome
      descricao
      urlDestino
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
  const listaCampanhas = await api.query({
    query: buscaCampanhaQuery,
  });
  return listaCampanhas.data.buscaCampanhas;
}

async function buscaPorId(id: string): Promise<Campanha> {
  const campanha = await api.query({
    query: buscaCampanhaPorIdQuery,
    variables: { id },
  });
  return campanha.data;
}

async function criaNovaCampanha(data: CampanhaForm) {
  const novaCampanha = await api.mutate({
    mutation: addCampanhaMutation,
    variables: { data },
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
  buscaPorId,
  deletaCampanha,
};
