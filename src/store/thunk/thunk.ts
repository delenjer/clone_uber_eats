import { setRestaurants } from '../restaurantsReducer/action';
import { getRestaurants } from '../../api/api';

//@ts-ignore
export const loadingRestaurants = () => {
  return (dispatch: (arg: { type: string }) => void) => {
    getRestaurants().then(async data => {
      dispatch(await setRestaurants(data));
    })
  }
}
