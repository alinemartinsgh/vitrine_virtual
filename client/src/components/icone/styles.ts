import styled from 'styled-components';

interface props {
  background: string;
}

export const IconeEstilizado = styled.div<props>`
  height: 3.5rem;
  width: 3.5rem;
  background-image: url(${(props) => props.background});
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
`;
