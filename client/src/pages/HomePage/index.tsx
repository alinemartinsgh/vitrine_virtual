import React from 'react';
import Header from 'src/components/header';
import ListaCampanha from '../../components/listaCampanha';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {

  return (
    <>
      <Header />
      <ListaCampanha />
    </>
  );
};

export default HomePage;
