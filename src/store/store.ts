import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createSelector } from 'reselect';

import { IState } from "../interface/interface";

import restaurantsReducer, *as selectorsRestaurants from './restaurantsReducer/index';
import loadingRestaurantsReducer, *as selectorsLoadingRestaurants from './loadingRestaurantsReducer/index';

export const getRestaurants = (state: IState) => selectorsRestaurants.getRestaurants(state.restaurants);
export const isLoadingRestaurants = (state: IState) => selectorsLoadingRestaurants
  .isLoadingRestaurants(state.isLoadingRestaurants);

export const getRestaurantsMemo = createSelector(
  getRestaurants,
  (restaurants) => {
    //@ts-ignore
    // const { initItems, addedItems } = restaurants;
    const { data } = restaurants.restaurants;

    if (!data) {
      return [];
    }

    const { feedItems, storesMap } = data;
    return feedItems.map(({ uuid }: any) => storesMap[uuid]);
  }
);

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  isLoadingRestaurants: loadingRestaurantsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
