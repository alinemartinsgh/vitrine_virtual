import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: 'rgb(200,200,200)';
  margin: auto auto;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ViewCarrosel = styled.View`
  background-color: 'rgb(255,255,255)';
  border-radius: 10px;
  height: 70%;
  margin: 0 2%;
  align-items: center;
`;

export const ImageContainer = styled.Image`
  width: 100%;
  height: 70%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TextContainer = styled.View`
  height: 30%;
  width: 100%;
`;

export const TituloCampanha = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 2px;
`;

export const TextCampanha = styled.Text`
  font-size: 16px;
  font-style: italic;
  padding-left: 3px;
  color: gray;
`;
