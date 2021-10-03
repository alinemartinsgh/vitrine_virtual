import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormCampanha from './pages/FormCampanha';
import actions from './store/campanhas/actions';
import { getListaCampanhas } from './store/campanhas/selectors';

export default function Test() {
  const dispatch = useDispatch();
  const listaCampanhas = useSelector(getListaCampanhas);

  function chamaDispatch() {
    dispatch(actions.buscaListaCampanhas());
  }

  return (
    <>
      <FormCampanha />
      <button onClick={chamaDispatch}>listar Campanhas</button>
      <ul>
        {listaCampanhas.map((campanha, index) => (
          <li key={index}>
            ({index}){campanha.id} - {campanha.nome} - {campanha.categoria}|{' '}
            <button>Editar</button> | {' '}
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
