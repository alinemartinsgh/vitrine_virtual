import {Campanha} from '../types';

export class CampanhaBuildMock {
  id?: any = '';
  createdAt?: string = '';
  updatedAt?: string = '';
  nome: string = '';
  descricao: string = '';
  categoria: string = '';
  imagem: string = '';
  dataInicio: string = '';
  dataFim: string = '';
  urlDestino: string = '';

  withId(id: string) {
    this.id = id;
    return this;
  }

  withNome(nome: string) {
    this.nome = nome;
    return this;
  }

  withDescricao(descricao: string) {
    this.descricao = descricao;
    return this;
  }

  withCategoria(categoria: string) {
    this.categoria = categoria;
    return this;
  }

  withImagem(imagem: string) {
    this.imagem = imagem;
    return this;
  }

  withCreatedAt(createdAt: string) {
    this.createdAt = createdAt;
    return this;
  }

  withUpdatedAt(updatedAt: string) {
    this.updatedAt = updatedAt;
    return this;
  }

  withDataInicio(dataInicio: string) {
    this.dataInicio = dataInicio;
    return this;
  }

  withUrlDestino(urlDestino: string) {
    this.urlDestino = urlDestino;
    return this;
  }

  withDataFim(dataFim: string) {
    this.dataFim = dataFim;
    return this;
  }

  build = (): Campanha => {
    return {
      id: this.id,
      nome: this.nome,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      dataInicio: this.dataInicio,
      dataFim: this.dataFim,
      descricao: this.descricao,
      categoria: this.categoria,
      imagem: this.imagem,
    };
  };
}
