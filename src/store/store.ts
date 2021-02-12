import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createSelector } from 'reselect';

import restaurantsReducer, *as selectorsRestaurants from './restaurantsReducer/index';

const getRestaurants = (state: any) => selectorsRestaurants.getRestaurants(state.restaurants);

export const getRestaurantsMemo = createSelector(
  getRestaurants,
  (restaurants) => {
    const { data } = restaurants;

    if (!data) {
      return [];
    }

    const { feedItems, storesMap } = data;

    return feedItems.map(({ uuid }: any) => storesMap[uuid]);
  }
);

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
