import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Text} from 'react-native';
// import * as selectors from '../../store/campanhas/selectors';

import {ViewCarrosel, Container} from './styles';
import {Image, StyleSheet} from 'react-native';

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
    nome: 'Aline',
    descricao: 'sucesso',
    categoria: 'TOP',
    imagem: 'imagem',
  },
  {
    nome: 'Leo',
    descricao: 'sucesso',
    categoria: 'TOP',
    imagem: 'imagem',
  },
  {
    nome: 'Leo',
    descricao: 'sucesso',
    categoria: 'TOP',
    imagem: 'imagem',
  },
  {
    nome: 'Leo',
    descricao: 'sucesso',
    categoria: 'TOP',
    imagem: 'app/src/assets/img/teste.jpg',
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
        <Image
          style={styles.logo}
          source={require('../../assets/img/teste.jpg')}
        />
        <Text>{item.nome}</Text>
        <Text>{item.descricao}</Text>
        <Text>{item.categoria}</Text>
        <Text>{item.imagem}</Text>
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

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
});

export default CustomCarousel;
