import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 40vw;
  height: 80vh;
  margin: 3rem auto;
  border: 1px solid;
  border-radius: 0.5rem;
`;

export const Select = styled.select`
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 9px 1px rgba(198, 198, 204, 1);
  color: #3c354e;
  cursor: pointer;
  font-size: 1rem;
  height: 0.3rem;
  line-height: 1.1;
  padding: 1rem;
  width: 85%;
`;

export const ImagemContainer = styled.div``;

export const ImagemLabel = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 0.5rem;
  width: 18vw;
  background: #212529;
  color: #fff;
  border-radius: 0.2rem;
  text-align: center;
  display: block;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const ImagemInput = styled.input`
  display: none;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30vw;
`;

export const DataInput = styled.input`
  padding: 0.5rem;
  color: #3c354e;
  border: none;
  outline: none;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 9px 1px rgba(198, 198, 204, 1);
  background: rgba(255, 255, 255, 0.15);
`;
