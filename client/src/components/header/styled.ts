import styled from 'styled-components';
import MCM from '../../assets/minha-claro-movel.png';

export const HeaderContainer = styled.header`
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 10px 2px rgba(30, 30, 36, 0.43);
  padding: 1rem 2rem;
`;

export const ImageContainer = styled.div`
  background: url(${MCM});
  background-repeat: no-repeat;
  background-size: contain;
  height: 10vh;
  width: 30vw;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 10vh;
  width: 25vw;
`;
