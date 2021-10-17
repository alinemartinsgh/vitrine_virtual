import React from 'react';
import {
  CardContainer,
  LineView,
  MainTitle,
  MainTitleView,
  PercentTitle,
  SecondaryView,
  SubTitle,
  TextDark,
  TextGray,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <SubTitle>internet disponível</SubTitle>
      <MainTitleView>
        <MainTitle>90</MainTitle>
        <PercentTitle>%</PercentTitle>
      </MainTitleView>
      <TextDark>Você tem internet disponível</TextDark>

      <SecondaryView>
        <TextDark>
          Disponível 10 GB<TextGray> de 11 GB</TextGray>
        </TextDark>
        <LineView />
        <TextDark>
          Renova em 3 dias <TextGray>/ dia 20 de out</TextGray>
        </TextDark>
      </SecondaryView>
    </CardContainer>
  );
};

export default Card;
