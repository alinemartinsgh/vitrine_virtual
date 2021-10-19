import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: 'rgb(255,255,255)';
  flex: 1;
  width: 100%;
  flex-direction: row;
`;

export const ViewCarrosel = styled.View`
  background-color: 'rgb(248,249,250)';
  border-radius: 10px;
  min-height: 300px;
  width: 80%;
  margin: 0 2%;
  padding: 3px;
  align-items: center;
  elevation: 4;
`;

export const ImageContainer = styled.Image`
  width: 60%;
  height: 50%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const TextContainer = styled.View`
  min-height: 40%;
  width: 100%;
  margin: 5px 0 5px 20px;
  flex: 1;
  padding: 5px;
`;

export const TituloCampanha = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding: 2px;
`;

export const TextCampanha = styled.Text`
  font-size: 16px;
  padding-left: 3px;
  padding: 5px 2px;
  margin-bottom: 3px;
`;

export const CategoriaCampanha = styled.Text`
  font-size: 14px;
  font-style: italic;
  padding: 3px;
  color: gray;
`;

export const Btn = styled.TouchableOpacity`
  background-color: 'rgb(253, 201, 33)';
  border-radius: 50px;
  padding: 7px;
  width: 50%;
  align-self: flex-end;
  margin-right: 10px;
  margin-bottom: 3px;
`;
export const BtnContent = styled.Text`
  text-align: center;
  font-weight: bold;
  color: 'rgb(0, 8, 20)';
`;
