import React from 'react';
import { useDispatch } from 'react-redux';
import actions from './store/campanhas/actions';

export default function Test() {
  const dispatch = useDispatch();

  function chamaDispatch() {
    dispatch(actions.buscaListaCampanhas());
  }

  return <div onClick={chamaDispatch}>qlqr coisa</div>;
}
