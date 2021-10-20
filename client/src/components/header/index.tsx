import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { ButtonContainer, HeaderContainer, ImageContainer } from './styled';

export const Header: React.FC = () => {
  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN_KEY');
    window.location.reload();
  };
  return (
    <HeaderContainer>
      <ImageContainer />
      <ButtonContainer>
        <Link to={{ pathname: '/novaCampanha' }}>
          <Button bgColor="enviar" content="+ Campanha" type="button" />
        </Link>
        <Button bgColor="" content="Sair" type="button" onClick={logout} />
      </ButtonContainer>
    </HeaderContainer>
  );
};