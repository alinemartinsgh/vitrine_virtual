import { Campanha } from '../types';

export class CampanhaBuilderMock {
  id = '';
  nome = '';
  descricao = '';
  categoria = '';
  urlDestino = '';
  imagem = '';
  dataInicio = '';
  dataFim = '';
  createdAt = new Date();
  updatedAt = new Date();

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
  withURLDestino(urlDestino: string) {
    this.urlDestino = urlDestino;
    return this;
  }
  withImagem(imagem: string) {
    this.imagem = imagem;
    return this;
  }
  withDataInicio(dataInicio: string) {
    this.dataInicio = dataInicio;
    return this;
  }
  withDataFim(dataFim: string) {
    this.dataFim = dataFim;
    return this;
  }
  withCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }
  withUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }

  build = (): Campanha => {
    return {
      id: this.id,
      nome: this.nome,
      descricao: this.descricao,
      categoria: this.categoria,
      urlDestino: this.urlDestino,
      imagem: this.imagem,
      dataInicio: this.dataInicio,
      dataFim: this.dataFim,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  };
}
