import React, {useState, useCallback, useRef, useEffect} from 'react';

import {RefreshControl} from 'react-native';

import * as selectors from '../../store/campanhas/selectors';

import {useSelector} from 'react-redux';

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
import {formatarData} from '../../utils/formataDate';

interface ItemProps {
  nome: string;
  descricao: string;
  categoria: string;
  imagem: string;
  dataInicio: string;
  dataFim: string;
  urlDestino: string;
}

interface CustomCarouselProps {}
interface RenderItemProps {
  item: ItemProps;
  index: number;
}

const Carrossel: React.FC<CustomCarouselProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const ref = useRef(null);
  const dispatch = useDispatch();

  const listaCampanhas = useSelector(selectors.getListaCampanhas);

  const getDate = new Date();
  const diatual = formatarData(getDate);

  const campanhasAtuais = listaCampanhas.filter(
    ({dataFim, dataInicio}) => dataFim > diatual && dataInicio <= diatual,
  );

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    try {
      dispatch(actions.buscaListaCampanhas());
    } catch (e) {
      console.log(e);
    }
    setRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  const renderItem = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({item, index}: RenderItemProps) => {
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
            <TextCampanha>{item.dataFim}</TextCampanha>
          </TextContainer>
        </ViewCarrosel>
      );
    },
    [],
  );

  return (
    <Container>
      <Carousel
        layout={'default'}
        ref={ref}
        data={campanhasAtuais}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        hasParallaxImages={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Container>
  );
};

export default Carrossel;
