import { call, put, takeLatest } from 'redux-saga/effects';
import { actions } from '.';
import * as repository from './repository';
import { Campanha, CampanhaTypes } from './types';

export function* buscaCampanhas(): any {
  try {
    const data = yield call(repository.listaTodasCampanhas);
    if (data) {
      yield put(actions.setListaCampanhas(data));
    }
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
}

export function* buscaCampanhaPorId(id: string): any {
  try {
    const campanha = yield call(repository.buscaPorId, id);
    if (campanha) {
      yield put(actions.setCampanhaPorId(campanha));
    }
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
}

export function* criaCampanha(data: any) {
  try {
    const novaCampanha: Campanha = yield call(
      repository.criaNovaCampanha,
      data.payload.data,
    );
    if (novaCampanha) {
      yield call(actions.buscaListaCampanhas);
    }
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
}

export function* atualizarCampanha(id: string, data: any): any {
  try {
    const updateCampanha = yield call(
      repository.atualizaCampanha,
      id,
      data.payload.data,
    );
    if (updateCampanha) {
      yield call(actions.buscaListaCampanhas);
    }
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
}

const sagas = [
  takeLatest(CampanhaTypes.BUSCA_LISTA_CAMPANHA, buscaCampanhas),
  takeLatest<any>(CampanhaTypes.BUSCA_POR_ID_CAMPANHA, buscaCampanhaPorId),
  //takeLatest(CampanhaTypes.ATUALIZAR_CAMPANHA, atualizarCampanha),
  takeLatest(CampanhaTypes.ADICIONAR_CAMPANHA, criaCampanha),
];

export default sagas;
