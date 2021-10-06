import React from 'react';
import {useDispatch} from 'react-redux';
import {loginActions} from '../../store/login';

import {View, Button, SafeAreaView} from 'react-native';

import CustomCarousel from '../../components/carrosel';
import {useSelector} from 'react-redux';
import * as selectors from '../../store/campanhas/selectors';

const Login: React.FC = () => {
  const listaCampanha = useSelector(selectors.getListaCampanhas);
  console.warn(listaCampanha);
  const dispatch = useDispatch();

  const handleLogin = (email: string, senha: string): any => {
    try {
      dispatch(loginActions.requestEmailPassword(email, senha));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <CustomCarousel />
      </View>
      <View>
        <Button
          onPress={handleLogin('admin@gmail.com', '12345')}
          title={'OI'}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
