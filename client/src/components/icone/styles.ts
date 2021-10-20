import styled from 'styled-components';
import claro from '../../assets/Claro.png';
import hitss from '../../assets/gh.png';

interface Props {
  background: string;
}

export const IconeEstilizado = styled.div<Props>`
  background-image: url(${(Props) => Props.background === 'claro' ? { claro } : { hitss }});
  background-repeat: no-repeat;
  background-size: cover;
  height: 50px;
  width: 50px;
  border: 1px solid;
`;
