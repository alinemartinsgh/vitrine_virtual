import styled from 'styled-components';

interface Props {
  messageReturn: boolean;
  boxType: string;
}

export const BoxMessage = styled.div<Props>`
  display: ${({ messageReturn }) =>
    messageReturn === true ? 'block' : 'none'};
  color: ${({ boxType }) => (boxType === 'error' ? '#e3262e' : '#6a994e')};
  font-weight: 500;
`;
