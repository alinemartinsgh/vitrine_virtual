import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormCampanha from './components/FormCampanha';
import actions from './store/campanhas/actions';
import { getListaCampanhas } from './store/campanhas/selectors';
import { CampanhaForm } from './store/campanhas/types';

export default function Test() {
  const dispatch = useDispatch();
  const listaCampanhas = useSelector(getListaCampanhas);

  function chamaDispatch() {
    dispatch(actions.buscaListaCampanhas());
  }

  const data: CampanhaForm = {
    nome: 'leo',
    categoria: 'asldkjasd',
    descricao: 'sucesso',
    imagem: 'não importa',
    dataFim: new Date(),
    dataInicio: new Date(),
  };

  return (
    <>
      <FormCampanha />
      <button onClick={chamaDispatch}>listar Campanhas</button>
      <ul>
        {listaCampanhas.map((campanha, index) => (
          <li key={index}>
            ({index}){campanha.id} - {campanha.nome} - {campanha.categoria}|{' '}
            <button
              onClick={() => {
                dispatch(actions.atualizarCampanha(campanha.id, data));
              }}
            >
              Editar
            </button>{' '}
            |{' '}
            <button
              onClick={() => {
                dispatch(actions.deletarCampanha(campanha.id));
              }}
            >
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
