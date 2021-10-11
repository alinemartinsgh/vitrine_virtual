import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import * as repository from './repository';
import { Campanha, CampanhaTypes } from './types';

export function* buscaCampanhas(): any {
  const data = yield call(repository.listaTodasCampanhas);
  if (data) {
    yield put(actions.setListaCampanhas(data));
  }
}

/* export function* buscaCampanhaPorId(id: string): any {

    const campanha = yield call(repository.buscaPorId, id);
    if (campanha) {
      yield put(actions.setCampanhaPorId(campanha));
    }
  } */

export function* criaCampanha(data: any) {
  const novaCampanha: Campanha = yield call(
    repository.criaNovaCampanha,
    data.payload.data,
  );
  if (novaCampanha) {
    yield call(actions.buscaListaCampanhas);
  }
}

export function* atualizarCampanha(
  action: ReturnType<typeof actions.atualizarCampanha>,
) {
  const { id, campanha } = action.payload;
  const updateCampanha: Campanha = yield call(
    repository.atualizaCampanha,
    id,
    campanha,
  );
  if (updateCampanha) {
    yield call(actions.buscaListaCampanhas);
  }
}

export function* deletarCampanha(id: any): any {
  const deletaCampanha = yield call(repository.deletaCampanha, id.payload.id);
  if (deletaCampanha) yield call(actions.buscaListaCampanhas);
}

const sagas = [
  takeLatest(CampanhaTypes.BUSCA_LISTA_CAMPANHA, buscaCampanhas),
  //takeLatest(CampanhaTypes.BUSCA_POR_ID_CAMPANHA, buscaCampanhaPorId),
  takeLatest(CampanhaTypes.ATUALIZAR_CAMPANHA, atualizarCampanha),
  takeLatest(CampanhaTypes.ADICIONAR_CAMPANHA, criaCampanha),
  takeLatest(CampanhaTypes.DELETE_CAMPANHA, deletarCampanha),
];

export default sagas;
