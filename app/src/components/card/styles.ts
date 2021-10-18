import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: white;
  padding: 25px;
  align-items: center;
  border-radius: 8px;
  flex: 1;
`;

export const MainTitleView = styled.View`
  flex-direction: row;
  margin: 20px 0 5px 0;
`;

export const MainTitle = styled.Text`
  font-family: Cambria;
  font-size: 100px;
  font-weight: 600;
  color: 'rgb(236, 71, 80)';
  letter-spacing: -9px;
`;

export const PercentTitle = styled.Text`
  font-family: Verdana;
  font-size: 45px;
  color: 'rgb(236, 71, 80)';
  padding-top: 30px;
`;

export const SubTitle = styled.Text`
  text-transform: uppercase;
  color: 'rgb(191, 192, 192)';
  font-weight: 500;
`;

export const SecondaryView = styled.View`
  align-self: flex-start;
  margin-top: 35px;
`;

export const TextDark = styled.Text`
  color: 'rgb(2, 43, 48)';
  font-size: 20px;
  font-weight: 600;
`;

export const TextGray = styled.Text`
  color: 'rgb(191, 192, 192)';
  border: 1px solid;
`;

export const LineView = styled.View`
  border: 0.5px solid lightgray;
  border-left-width: 340px;
  margin: 20px 0;
`;
