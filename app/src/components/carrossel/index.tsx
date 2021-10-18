import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Linking, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import * as selectors from '../../store/campanhas/selectors';
import {actions} from '../../store/campanhas';

import {
  ViewCarrosel,
  Container,
  ImageContainer,
  TituloCampanha,
  TextContainer,
  TextCampanha,
  CategoriaCampanha,
  Btn,
  BtnContent,
} from './styles';

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

  const campanhaDefault = [
    {
      nome: 'Claro clube',
      descricao: 'Conheça o Claro clube',
      categoria: 'Claro clube',
      imagem: '../../assets/img/claro-clube.png',
      dataInicio: '',
      dataFim: '',
      urlDestino: 'https://www.claro.com.br/claro-clube',
    },
  ];

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
          {campanhasAtuais.length !== 0 ? (
            <ImageContainer source={{uri: `${item.imagem}`}} />
          ) : (
            <ImageContainer
              source={require('../../assets/img/claro-clube.png')}
            />
          )}
          <TextContainer>
            <TituloCampanha>{item.nome}</TituloCampanha>
            <TextCampanha>{item.descricao}</TextCampanha>
            <CategoriaCampanha>{item.categoria}</CategoriaCampanha>
            <Btn
              onPress={() => {
                Linking.openURL(item.urlDestino);
              }}>
              <BtnContent>Saiba mais</BtnContent>
            </Btn>
          </TextContainer>
        </ViewCarrosel>
      );
    },
    [campanhasAtuais.length],
  );

  return (
    <Container>
      <Carousel
        layout={'default'}
        ref={ref}
        data={campanhasAtuais.length !== 0 ? campanhasAtuais : campanhaDefault}
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
