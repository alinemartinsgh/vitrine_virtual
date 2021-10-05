import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '../../store/campanhas/selectors';

import { actions } from '../../store/campanhas';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const dispatch = useDispatch();
  const listaCampanhas = useSelector(selectors.getListaCampanhas);

  useEffect(() => {
    dispatch(actions.buscaListaCampanhas());
  }, [dispatch]);

  console.log(listaCampanhas);
  return <div>Oi</div>;
};

export default HomePage;
