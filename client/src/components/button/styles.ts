import styled from 'styled-components';

interface Props {
  bgColor: string;
}

const buttonColor = (props: Props) => {
  if (props.bgColor === 'enviar') {
    return '#e3262e';
  } else if (props.bgColor === 'editar') {
    return '#ffb703';
  } else {
    return '#000814';
  }
};

export const CustomizedButton = styled.button<Props>`
  background: ${(props) => buttonColor(props)};
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
