import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createSelector } from 'reselect';

import { IState } from "../interface/interface";

import restaurantsReducer, *as selectorsRestaurants from './restaurantsReducer/index';
import loadingRestaurantsReducer, *as selectorsLoadingRestaurants from './loadingRestaurantsReducer/index';
import loadingModalReducer, *as selectorsLoadingModalData from './loadingModalReducer/index';
import restaurantPageReducer, *as selectorsRestaurantPageReducer from './restaurantPageReducer/index';
import restaurantMenuItemsReducer, *as selectorsMenuItems from './restaurantMenuItemsReducer/index';
import locationRestaurants, *as selectorsLocationRestaurants from './locationReducer/index';

export const getLocationOptions = (state: IState) => {
  const dataLocation = selectorsLocationRestaurants.locationRestaurants(state.locationRestaurants);
  const { location } = dataLocation;
  const { data } = location;

  if(!data) {
    return [];
  }

  const { locationsMap } = data;

  return Object.values(locationsMap);
}

export const getLocationRestaurants = (state:IState) => selectorsLocationRestaurants
  .locationRestaurants(state.locationRestaurants);
export const getRestaurants = (state:IState) => selectorsRestaurants.getRestaurants(state.restaurants);
const getRestaurant = (state:IState) => selectorsRestaurantPageReducer.getRestaurant(state.restaurant);
export const isLoadingRestaurants = (state:IState) => selectorsLoadingRestaurants
  .isLoadingRestaurants(state.isLoadingRestaurants);
export const loadingModalData = (state:IState) => selectorsLoadingModalData.isLoadingModalData(state.loadingModalData);
export const getMenuItems = (state:IState) => selectorsMenuItems.getMenuItems(state.menuItems);

export const getRestaurantsMemo = createSelector(
  getRestaurants,
  (restaurants) => {
    const { data } = restaurants.restaurants;

    if (!data) {
      return [];
    }

    const { feedItems, storesMap } = data;
    return feedItems.map(({ uuid }: any) => storesMap[uuid]);
  }
);
export const getRestaurantMemo = createSelector(
  getRestaurant,
  (restaurant) => {
    const { data } = restaurant;

    if (!data) {
      return [];
    }

    return data;
  }
);

const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  isLoadingRestaurants: loadingRestaurantsReducer,
  restaurant: restaurantPageReducer,
  menuItems: restaurantMenuItemsReducer,
  locationRestaurants: locationRestaurants,
  loadingModalData: loadingModalReducer,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
));

export default store;
