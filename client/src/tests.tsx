import React from 'react';
import { useDispatch } from 'react-redux';
import FormCampanha from './pages/FormCampanha';
import actions from './store/campanhas/actions';
//import { getListaCampanhas } from './store/campanhas/selectors';

export default function Test() {
  const dispatch = useDispatch();

  //const listaCampanhas = useSelector(getListaCampanhas);
  function chamaDispatch() {
    dispatch(actions.buscaListaCampanhas());
  }

  //console.log(listaCampanhas);

  return (
    <>
      <FormCampanha />
      <button onClick={chamaDispatch}>listar Campanhas</button>
    </>
  );
}
