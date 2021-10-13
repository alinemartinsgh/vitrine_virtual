import { put, call } from 'redux-saga/effects';

import * as sagas from '../sagas';
import * as repository from '../repository';
import { actions } from '../';
/* eslint-disable jest/no-mocks-import */
import { CampanhaBuilderMock } from '../__mocks__/campanha.mock';
import { CampanhaFormBuilderMock } from '../__mocks__/campanhaForm.mock ';

const campanha = new CampanhaBuilderMock().withNome('campanha teste').build();
const data = new CampanhaFormBuilderMock().withNome('campanha teste').build();

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

  test('deve fazer a criação de Campanhas corretamente', () => {
    const gen = sagas.criaCampanha(actions.adicionarCampanha);

    expect(gen.next().value).toEqual(put(actions.setError()));
    console.log(call(repository.criaNovaCampanha, data));

    expect(gen.next().value).toEqual(call(repository.criaNovaCampanha, data));
    const response = data;

    expect(gen.next(response).value).toEqual(call(actions.buscaListaCampanhas));

    expect(gen.next().done).toBe(true);
  });
});
