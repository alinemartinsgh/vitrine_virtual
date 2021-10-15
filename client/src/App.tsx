import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CampanhaPage from './pages/CampanhaPage';
import EditarPage from './pages/EditarPage';
import { Redirect } from 'react-router';
import { getToken } from './utils/token';

const { store } = configureStore();

export default function App() {
  //
  const isLogged = getToken();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {isLogged ? null : <Redirect exact to="/" />}
          <Route exact path="/homePage" component={HomePage} />
          <Route exact path="/novaCampanha" component={CampanhaPage} />
          <Route exact path="/editar" component={EditarPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
