import React from 'react';

import {SafeAreaView} from 'react-native';
import Card from '../../components/card';

import CustomCarousel from '../../components/carrossel';

const Login: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Card />
      <CustomCarousel />
    </SafeAreaView>
  );
};

export default Login;
