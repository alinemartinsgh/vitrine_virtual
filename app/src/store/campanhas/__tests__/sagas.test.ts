import {put, call} from 'redux-saga/effects';

import {actions} from '../';
import {CampanhaBuildMock} from '../__mocks__/CampanhaBuildMock.mock';

import * as sagas from '../sagas';
import * as repository from '../repository';

const Campanha = new CampanhaBuildMock().withNome('boticario').build();

describe('Campanha Sagas', () => {
  test('deve realizar o request de Characters corretamente', () => {
    const gen = sagas.buscaCampanhas();

    expect(gen.next().value).toEqual(put(actions.setError()));
  });
});
