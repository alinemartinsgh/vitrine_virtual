import React from 'react';
import jwt_decode from 'jwt-decode';

import ListaCampanha from '../../components/listaCampanha';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN_KEY');

  const destroyToken = () => {
    localStorage.removeItem('ACCESS_TOKEN_KEY');
  };

  return (
    <>
      <div>
        <h1>HomePage</h1>
        <ListaCampanha />
        <button onClick={destroyToken}> Destroy token here </button>
      </div>
    </>
  );
};

export default HomePage;
