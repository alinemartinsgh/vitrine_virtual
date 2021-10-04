import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  color: #ffffff;
  margin: 3% auto;
`;

export const BotaoContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

export const ReguaHorizontal = styled.hr`
  width: 90%;
  height: 1.5%;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #00767f 0%, #0eb5c2 79%);
  background-color: #ebd0d0;
  margin: 2rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

export const IconeContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
  height: 10%;
`;

export const TituloBemVindo = styled.h2`
  margin: auto auto;
  color: black;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  height: 10%;
`;
