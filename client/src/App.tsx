import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CampanhaPage from './pages/CampanhaPage';
import EditarPage from './pages/EditarPage';
import { Redirect } from 'react-router';

const { store } = configureStore();

export default function App() {
  const isLogged = localStorage.getItem('ACCESS_TOKEN_KEY');

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/homePage" component={HomePage}>
            {isLogged ? null : <Redirect exact to="/" />}
          </Route>
          <Route exact path="/novaCampanha" component={CampanhaPage}>
            {isLogged ? null : <Redirect exact to="/" />}
          </Route>
          <Route exact path="/editar" component={EditarPage}>
            {isLogged ? null : <Redirect exact to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
