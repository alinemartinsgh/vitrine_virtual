import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const { store } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} />
          <Route path="/homePage" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
