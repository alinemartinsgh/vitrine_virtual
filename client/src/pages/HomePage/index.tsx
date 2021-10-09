import React from 'react';
import jwt_decode from 'jwt-decode';

import ListaCampanha from '../../components/listaCampanha';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const accessToken = localStorage.getItem('ACCESS_TOKEN_KEY');

  if (accessToken) {
    const decodedToken = jwt_decode(accessToken);
    console.log(decodedToken);
  }

  return (
    <div>
      <h1>HomePage</h1>
      <ListaCampanha />
    </div>
  );
};

export default HomePage;
