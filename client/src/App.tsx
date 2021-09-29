import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import Tests from './tests';

const { store } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>vitrine virtual</h1>
        <Tests />
      </div>
    </Provider>
  );
}
