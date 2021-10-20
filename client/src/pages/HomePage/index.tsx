import React from 'react';
import { CampanhaList, Header } from '../../components';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <Header />
      <CampanhaList />
    </>
  );
};

export default HomePage;
