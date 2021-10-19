import React from 'react';
import { Link } from 'react-router-dom';
import { Botao } from '../botao';
import { ButtonContainer, HeaderContainer, ImagemContainer } from './styled';

const Header: React.FC = () => {
  const logout = () => {
    localStorage.removeItem('ACCESS_TOKEN_KEY');
    window.location.reload();
  };
  return (
    <HeaderContainer>
      <ImagemContainer />
      <ButtonContainer>
        <Link to={{ pathname: '/novaCampanha' }}>
          <Botao bgColor="enviar" conteudo="+ Campanha" type="button" />
        </Link>
        <Botao bgColor="" conteudo="Sair" type="button" onClick={logout} />
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
