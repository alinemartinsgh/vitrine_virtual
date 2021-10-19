import styled from 'styled-components';

export const ListaContainer = styled.div`
  align-items: center;
  justify-content: center;
  max-height: 80vh;
  min-height: 50vh;
  max-width: 60vw;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(30, 30, 36, 0.43);
  border-radius: 0.5rem;
  margin: 3rem auto;
  padding: 1.5rem 0.5rem;
`;

export const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const TableR = styled.tr``;

export const TableH = styled.thead`
  height: 4rem;
  color: #011627;
  text-transform: uppercase;
`;

export const TableB = styled.tbody`
  font-size: 0.9rem;
  font-weight: 300;
`;

export const TableD = styled.td`
  text-align: center;
  padding: 0.5rem 0rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
