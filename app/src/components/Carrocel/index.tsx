import React, {useState, useCallback, useRef, useEffect} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import * as selectors from '../../store/campanhas/selectors';

import {actions} from '../../store/campanhas';
import {useDispatch, useSelector} from 'react-redux';
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
];

const CustomCarousel: React.FC<CustomCarouselProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [carouselItems, setCarouselItems] = useState<ItemProps[]>(exampleItems);
  const ref = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.buscaListaCampanhas());
  }, [dispatch]);

  const listaCampanhas = useSelector(selectors.getListaCampanhas);

  const renderItem = useCallback(({item, index}: RenderItemProps) => {
    return (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 450,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
        }}>
        <Text style={{fontSize: 30}}>{item.nome}</Text>
        <Text>{item.descricao}</Text>
        <Text>{item.categoria}</Text>
        <Text>{item.imagem}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: 'rebeccapurple', paddingTop: 50}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Carousel
          layout={'default'}
          ref={ref}
          data={listaCampanhas}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index: number) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;
