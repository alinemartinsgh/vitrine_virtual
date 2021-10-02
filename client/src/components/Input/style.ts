import styled from 'styled-components';

export const InputDiv = styled.div`
  padding: 0.2rem;
`;

export const CampoInput = styled.input`
  display: ${(props) => (props.type === 'file' ? 'none' : 'block')};
`;

export const InputLabel = styled.label`
  padding: 0.5rem;
  width: 15rem;
  background-color: #333;
  color: #fff;
  text-align: center;
  display: block;
  margin-top: 10px;
  cursor:  ${(props) => (props.htmlFor === 'imagem' ? 'pointer' : 'none')};
`;
