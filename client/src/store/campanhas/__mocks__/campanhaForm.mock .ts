import { CampanhaForm } from '../types';

export class CampanhaFormBuilderMock {
  nome = '';
  descricao = '';
  categoria = '';
  urlDestino = '';
  imagem = '';
  dataInicio = '';
  dataFim = '';

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

  build = (): CampanhaForm => {
    return {
      nome: this.nome,
      descricao: this.descricao,
      categoria: this.categoria,
      urlDestino: this.urlDestino,
      imagem: this.imagem,
      dataInicio: this.dataInicio,
      dataFim: this.dataFim,
    };
  };
}
