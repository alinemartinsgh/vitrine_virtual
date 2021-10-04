import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './src/store';

import Login from './src/pages/Login';
import Home from './src/pages/Home';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {store} = configureStore();

const RootStack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <RootStack.Screen name="Login" component={Login} />
          <RootStack.Screen name="Home" component={Home} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
