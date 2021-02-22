import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { RestaurantPage } from './components/RestaurantPage/RestaurantPage';

const App = () => (
  <div className="App">
    <Header />

    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/restaurant-page/:uuid' component={RestaurantPage} />
    </Switch>
  </div>
);

export default App;
