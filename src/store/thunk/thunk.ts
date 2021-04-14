import { setRestaurants } from '../restaurantsReducer/action';
import { setLoadingRestaurants } from '../loadingRestaurantsReducer/action';
import { setRestaurant } from '../restaurantPageReducer/action';
import { setMenuItems } from '../restaurantMenuItemsReducer/action';
import { setLocationRestaurants } from '../locationReducer/action';
import {
  getLocationRestaurants,
  getMenuItems,
  getRestaurant,
  getRestaurants
} from '../../api/api';

export const loadingLocation = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    getLocationRestaurants().then(async data => {
      dispatch(await setLocationRestaurants(data));
    });
  }
}

export const loadingLocationsId = async () => {
  return await getLocationRestaurants().then(data => data);
}

export const loadingRestaurants = (id:string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoadingRestaurants(true));
    getRestaurants(id).then(async data => {
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
