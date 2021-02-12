import React from 'react';
import './App.scss';

import { RestaurantsCatalog } from './components/RestaurantsCatalog/RestaurantsCatalog';
import { Header } from './components/Header/Header';

const App = () => (
  <div className="App">
    <Header />
    <RestaurantsCatalog />
  </div>
);

export default App;
