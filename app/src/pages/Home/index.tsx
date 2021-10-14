import React from 'react';

import {SafeAreaView} from 'react-native';

import CustomCarousel from '../../components/carrossel';

const Login: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomCarousel />
    </SafeAreaView>
  );
};

export default Login;
