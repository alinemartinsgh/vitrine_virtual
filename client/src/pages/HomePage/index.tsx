import React from 'react';

import ListaCampanha from '../../components/listaCampanha';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN_KEY');
    window.location.reload();
  };

  return (
    <>
      <div>
        <h1>HomePage</h1>
        <ListaCampanha />
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};

export default HomePage;
