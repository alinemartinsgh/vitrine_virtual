import React from 'react';

import ListaCampanha from '../../components/listaCampanha';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ListaCampanha />
    </div>
  );
};

export default HomePage;
