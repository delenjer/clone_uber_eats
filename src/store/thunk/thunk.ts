import { setRestaurants } from '../restaurantsReducer/action';
import { setLoading } from '../loadingRestaurantsReducer/action';
import { setRestaurant } from '../restaurantPageReducer/action';
import { setMenuItems } from '../restaurantMenuItemsReducer/action';
import { setLocationRestaurants } from '../locationReducer/action';
import { setLoadingData } from '../loadingModalReducer/action';
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

export const loadingRestaurants = (id:string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoading(true));
    getRestaurants(id).then(async data => {
      dispatch(await setRestaurants(data));
      dispatch(setLoading(false));
    })
  }
}

export const loadingRestaurant = (uuid: string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoading(true));
    getRestaurant(uuid).then(async data => {
      dispatch(await setRestaurant(data));
      dispatch(setLoading(false));
    })
  }
}

export const loadingMenuItems = (uuid: string) => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoadingData(true));
    getMenuItems(uuid).then(async data => {
      dispatch(await setMenuItems(data));
      dispatch(setLoadingData(false));
    }).catch(() => {
      dispatch(setLoadingData(false));
      dispatch(setMenuItems({}));
    });
  }
}
