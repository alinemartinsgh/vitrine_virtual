export enum CampanhaTypes {
  SET_ERROR = '@campanha/SET_ERROR',
  BUSCA_LISTA_CAMPANHA = '@campanha/BUSCA_LISTA_CAMPANHA',
  SET_LISTA_CAMPANHA = '@campanha/SET_LISTACAMPANHA',
}

export type Campanha = {
  id?: any;
  createdAt?: string;
  updatedAt?: string;
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  dataInicio: string;
  dataFim: string;
  urlDestino: string;
};

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
