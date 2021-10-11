import {call, put, takeLatest} from 'redux-saga/effects';
import {actions} from '.';
import * as repository from './repository';
import {CampanhaTypes} from './types';

export function* buscaCampanhas(): any {
  try {
    yield put(actions.setError());

    const data = yield call(repository.listaTodasCampanhas);
    if (data) {
      yield put(actions.setListaCampanhas(data));
    }
  } catch (err: any) {
    yield put(actions.setError(err.message));
  }
}

export default [takeLatest(CampanhaTypes.BUSCA_LISTA_CAMPANHA, buscaCampanhas)];
