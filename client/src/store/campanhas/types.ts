export enum CampanhaTypes {
  SET_ERROR = '@campanha/SET_ERROR',

  CREATE_CAMPANHA = '@campanha/CREATE_CAMPANHA',
  DELETE_CAMPANHA = '@campanha/DELETE_CAMPANHA',
  REQUEST_CAMPANHA = '@campanha/REQUEST_CAMPANHA',
  UPDATE_CAMPANHA = '@campanha/UPDATE_CAMPANHA',
}

export type CampanhaForm = {
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  dataInicio: Date;
  dataFim: Date;
};

export interface Campanha extends CampanhaForm {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ListaCampanhas = Array<Campanha>;

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
