import styled from 'styled-components';

interface props {
  bgColor: string;
}

export const BotaoCustomizado = styled.button<props>`
  background: ${(props) =>
    props.bgColor === 'enviar'
      ? '#e3262e'
      : props.bgColor === 'editar'
      ? '#ffb703'
      : '#000814'};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  width: 10rem;
  padding: 0.5rem 1rem;
  border: none;
  color: #fff;
  border-radius: 2rem;
  cursor: pointer;
  font-weight: 500;

  :hover {
    opacity: 0.75;
  }
`;
