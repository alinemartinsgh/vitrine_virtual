import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CampanhaPage from './pages/CampanhaPage';

const { store } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/homePage" component={HomePage} />
          <Route exact path="/novaCampanha" component={CampanhaPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}