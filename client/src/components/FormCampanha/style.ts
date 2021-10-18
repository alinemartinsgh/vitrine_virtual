import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 70vw;
  height: 80vh;
  margin: 3rem auto;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(30, 30, 36, 0.43);
  border-radius: 0.5rem;
  padding: 2.5rem 0.5rem;
`;

export const Select = styled.select`
  width: 20%;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 0px 9px 1px rgba(198, 198, 204, 1);
  border-radius: 0.2rem;
  border: none;
  height: 2.5rem;
  line-height: 1.1;
  font-size: 1rem;
  color: #3c354e;

  option {
    color: #3c354e;
    background: rgba(255, 255, 255, 0.15);
    padding-left: 0.5rem;
  }
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
  align-items: center;
  width: 80%;
`;

export const DataLabel = styled.label`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #3c354e;
  margin-left: 2%;
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
