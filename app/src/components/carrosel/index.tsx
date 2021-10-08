import React, {useState, useCallback, useRef, useEffect} from 'react';

// import * as selectors from '../../store/campanhas/selectors';

import {
  ViewCarrosel,
  Container,
  ImageContainer,
  TituloCampanha,
  TextContainer,
  TextCampanha,
} from './styles';

import {actions} from '../../store/campanhas';
import {useDispatch} from 'react-redux';
import Carousel from 'react-native-snap-carousel';

interface ItemProps {
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
}

interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const exampleItems = [
  {
    nome: 'HBO Max',
    descricao: 'Apresente seu CPF para ganhar 50% na assinatura',
    categoria: 'Entretenimento',
    imagem:
      'https://vejasp.abril.com.br/wp-content/uploads/2021/06/hbomax-divulgacao.jpg.jpg',
  },
  {
    nome: 'Natura',
    descricao: 'Ganhe 35% de desconto nas compras acima de R$99',
    categoria: 'Bem-estar',
    imagem:
      'data:image/png;base64,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',
  },
  {
    nome: 'Renner',
    descricao:
      'Aproveite 15% de desconto em roupas e demais artigos num dos maiores varejistas de moda',
    categoria: 'Varejo',
    imagem:
      'https://play-lh.googleusercontent.com/wCubtgv8BotXA-hjQdH1Fq3nTio1u6-k387HbBWFzqPIyp8Tk4yAzayVA5UExZ1qLA',
  },
  {
    nome: 'ChefsClub',
    descricao:
      'Isenção na mensalidade do Chefscluv e até 50% de desconto no total da conta',
    categoria: 'Gastronomia',
    imagem:
      'data:image/png;base64,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.jpg',
  },
];

const CustomCarousel: React.FC<CustomCarouselProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.buscaListaCampanhas());
  }, [dispatch]);

  // const listaCampanhas = useSelector(selectors.getListaCampanhas);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const renderItem = useCallback(({item, index}: RenderItemProps) => {
    return (
      <ViewCarrosel>
        <ImageContainer
          source={{
            uri: `${item.imagem}`,
          }}
        />
        <TextContainer>
          <TituloCampanha>{item.nome}</TituloCampanha>
          <TextCampanha>{item.descricao}</TextCampanha>
          <TextCampanha>{item.categoria}</TextCampanha>
        </TextContainer>
      </ViewCarrosel>
    );
  }, []);

  return (
    <Container>
      <Carousel
        layout={'default'}
        ref={ref}
        data={exampleItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        hasParallaxImages={true}
      />
    </Container>
  );
};

export default CustomCarousel;
