import { call, put, takeLatest, select } from 'redux-saga/effects';
import { actions } from '.';
import {
  listaTodasCampanhas,
  criaNovaCampanha,
  atualizaCampanha,
} from './repository';
import { CampanhaForm, CampanhaTypes } from './types';

export function* buscaCampanhas(): any {
  try {
    const data = yield call(listaTodasCampanhas);
    if (data) {
      yield put(actions.setListaCampanhas(data));
    }
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
}

export function* criaCampanha(data: CampanhaForm) {
  try {
    const novaCampanha = yield call(criaNovaCampanha, data);
    if (novaCampanha) {
      yield put(actions.adicionarCampanha, data);
    }
    yield call(buscaCampanhas);
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
}

export function* atualizarCampanha(id: any, data: CampanhaForm): any {
  try {
    const updateCampanha = yield call(actions.atualizarCampanha, id, data);
    if (updateCampanha) {
      atualizaCampanha(id, data);
    }
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
}

/* export function* buscaCampanhaPorId(id: any) {
  try {
    const campanha = yield call(actions.buscaPorId, id);
    if (campanha) {
      buscaCampanhaPorId(id);
    }
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
} */

const sagas = [
  takeLatest(CampanhaTypes.BUSCA_LISTA_CAMPANHA, buscaCampanhas),
  //takeLatest(CampanhaTypes.BUSCA_POR_ID_CAMPANHA, buscaCampanhaPorId),
  takeLatest(CampanhaTypes.ATUALIZAR_CAMPANHA, atualizarCampanha),
  takeLatest(CampanhaTypes.ADICIONAR_CAMPANHA, criaCampanha),
];

export default sagas;
