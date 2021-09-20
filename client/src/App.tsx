import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>vitrine virtual</h1>
      </div>
    </Provider>
  );
}
