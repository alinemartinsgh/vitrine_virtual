import {gql} from '@apollo/client';

import {api} from '../../api';
import {ListaCampanhas} from './types';

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
      urlDestino
      imagem
    }
  }
`;

async function listaTodasCampanhas(): Promise<ListaCampanhas> {
  const getListaCampanhas = await api.query({
    query: buscaCampanhaQuery,
  });
  return getListaCampanhas.data.buscaCampanhas;
}

export {listaTodasCampanhas};
