import { setRestaurants } from '../restaurantsReducer/action';
import { setLoadingRestaurants } from '../loadingRestaurantsReducer/action';
import { setRestaurant } from '../restaurantPageReducer/action';
import { setMenuItems } from '../restaurantMenuItemsReducer/action';
import { getRestaurants, getRestaurant, getMenuItems } from '../../api/api';

export const loadingRestaurants = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoadingRestaurants(true));
    getRestaurants().then(async data => {
      dispatch(await setRestaurants(data));

      dispatch(setLoadingRestaurants(false));
    })
  }
}

export const loadingRestaurant = (uuid: string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoadingRestaurants(true));
    getRestaurant(uuid).then(async data => {
      dispatch(await setRestaurant(data));

      dispatch(setLoadingRestaurants(false));
    })
  }
}

export const loadingMenuItems = (uuid: string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    getMenuItems(uuid).then(async data => {
      dispatch(await setMenuItems(data));
    })
  }
}

