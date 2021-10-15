import { put, call } from 'redux-saga/effects';

import * as sagas from '../sagas';
import * as repository from '../repository';
import { actions } from '../';
/* eslint-disable jest/no-mocks-import */
import { CampanhaBuilderMock } from '../__mocks__/campanha.mock';
import { CampanhaFormBuilderMock } from '../__mocks__/campanhaForm.mock ';

const campanha = new CampanhaBuilderMock()
  .withId('12345')
  .withNome('campanha teste')
  .build();
const campanhaForm: any = new CampanhaFormBuilderMock()
  .withNome('campanha teste')
  .build();

describe('Campanha Sagas', () => {
  test('deve realizar o request de Campanhas corretamente', () => {
    const gen = sagas.buscaCampanhas();

    expect(gen.next().value).toEqual(put(actions.setError()));

    expect(gen.next().value).toEqual(call(repository.listaTodasCampanhas));
    const response = [campanha];

    expect(gen.next(response).value).toEqual(
      put(actions.setListaCampanhas([campanha])),
    );

    expect(gen.next().done).toBe(true);
  });

  test('deve realizar a criação de Campanhas corretamente', () => {
    const gen = sagas.criaCampanha(actions.adicionarCampanha(campanhaForm));

    expect(gen.next().value).toEqual(put(actions.setError()));

    expect(gen.next().value).toEqual(
      call(repository.criaNovaCampanha, campanhaForm),
    );

    const response = campanhaForm;
    expect(gen.next(response).value).toEqual(call(actions.buscaListaCampanhas));

    expect(gen.next().done).toBe(true);
  });

  test('deve realizar a atualização de Campanhas corretamente', () => {
    const gen = sagas.atualizarCampanha(
      actions.atualizarCampanha(campanha.id, campanha),
    );

    expect(gen.next().value).toEqual(put(actions.setError()));

    expect(gen.next().value).toEqual(
      call(repository.atualizaCampanha, campanha.id, campanha),
    );

    const response = campanha;
    expect(gen.next(response).value).toEqual(call(actions.buscaListaCampanhas));
    expect(gen.next().done).toBe(true);
  });

  test('deve realizar a deleção de Campanhas corretamente', () => {
    const gen = sagas.deletarCampanha(actions.deletarCampanha(campanha.id));

    expect(gen.next().value).toEqual(put(actions.setError()));

    expect(gen.next().value).toEqual(
      call(repository.deletaCampanha, campanha.id),
    );

    const response = campanha;
    expect(gen.next(response).value).toEqual(call(actions.buscaListaCampanhas));
    expect(gen.next().done).toBe(true);
  });
});
