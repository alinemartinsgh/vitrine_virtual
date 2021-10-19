export enum CampanhaTypes {
  SET_ERROR = '@campanha/SET_ERROR',
  ADICIONAR_CAMPANHA = '@campanha/ADICIONAR_CAMPANHA',
  DELETE_CAMPANHA = '@campanha/DELETE_CAMPANHA',
  BUSCA_LISTA_CAMPANHA = '@campanha/BUSCA_LISTACAMPANHA',
  SET_LISTA_CAMPANHA = '@campanha/SET_LISTACAMPANHA',
  ATUALIZAR_CAMPANHA = '@campanha/ATUALIZAR_CAMPANHA',
}

export type CampanhaForm = {
  nome: string;
  descricao: string;
  categoria: string;
  urlDestino: string;
  imagem: string;
  dataInicio: string;
  dataFim: string;
};

export interface Campanha extends CampanhaForm {
  id?: any;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ListaCampanhas = Campanha[];

export interface CampanhaState {
  isLoading: boolean;
  listaCampanhas: ListaCampanhas;
  error?: string;
}

export type CampanhaAction<Payload> = {
  type: CampanhaTypes;
  payload: Payload;
};

export type CampanhaReducer = (
  state: CampanhaState,
  payload: CampanhaAction<CampanhaState>,
) => CampanhaState;
