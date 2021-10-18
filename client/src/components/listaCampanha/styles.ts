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
  padding: 2.5rem 0.5rem;
`;

export const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

export const TableR = styled.tr`
  width: 80%;
`;

export const TableB = styled.tbody``;

export const TableH = styled.thead``;

export const TableD = styled.td`
  text-align: center;
`;

//TODO width em pixel

export const ButtonEditing = styled.button`
  background: #f48c06;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 90px;
  height: 1.5rem;
  border: none;
  color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  margin: 0;

  :hover {
    background: #a61d19;
  }
`;

export const ButtonDeleting = styled.button`
  background: #6a040f;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  width: 90px;
  height: 1.5rem;
  border: none;
  color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  margin: 0;

  :hover {
    background: #a61d19;
  }
`;
