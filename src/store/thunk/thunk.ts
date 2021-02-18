import { setRestaurants } from '../restaurantsReducer/action';
import { setLoadingRestaurants } from '../loadingRestaurantsReducer/action';
import { getRestaurants } from '../../api/api';

export const loadingRestaurants = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    dispatch(setLoadingRestaurants(true));
    getRestaurants().then(async data => {
      dispatch(await setRestaurants(data));

      dispatch(setLoadingRestaurants(false));
    })
  }
}
