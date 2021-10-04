import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FormCampanha from './pages/FormCampanha';

const { store } = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/homePage" component={HomePage} />
          <Route exact path="/FormCampanha" component={FormCampanha} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
