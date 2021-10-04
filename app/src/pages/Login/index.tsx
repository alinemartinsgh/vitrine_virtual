import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as selectors from '../../store/login/selectors';
import {loginActions} from '../../store/login';

import {View, Button} from 'react-native';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectors.getCurrentUser);
  console.log(users);

  const handleLogin = (email: string, senha: string): any => {
    try {
      dispatch(loginActions.requestEmailPassword(email, senha));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <Button onPress={handleLogin('admin@gmail.com', '12345')} title={'OI'} />
    </View>
  );
};

export default Login;
