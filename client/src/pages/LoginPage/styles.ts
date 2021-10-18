import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 60vh;
  width: 30vw;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(30, 30, 36, 0.43);
  border-radius: 0.5rem;
  margin: 3rem auto;
  padding: 2.5rem 0.5rem;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 50vh;
  min-width: 50vh;
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
  margin-top: 1rem;
  height: 20%;
  width: 100%;
`;

export const ReguaHorizontal = styled.hr`
  width: 90%;
  height: 1.5%;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #e3262e 0%, #a61d19 79%);
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
  font-family: Tahoma, sans-serif;
  margin: auto;
  color: #1e1e24;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  height: 10%;
`;
