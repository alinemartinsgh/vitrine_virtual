import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'src/store/campanhas';
import { getListaCampanhas } from 'src/store/campanhas/selectors';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const dispatch = useDispatch();
  const listaCampanhas = useSelector(getListaCampanhas);

  console.log(listaCampanhas);
  function chamaLista() {
    dispatch(actions.buscaListaCampanhas());
  }
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={chamaLista}>lista</button>
    </div>
  );
};

export default HomePage;
