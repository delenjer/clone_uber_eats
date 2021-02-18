import { SET_LOADING } from './action';
import { IAction } from "../../interface/interface";

export const isLoadingRestaurants = (state: boolean) => state;

const loadingRestaurantsReducer = (isLoading = false, action: IAction) => {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading;

    default:
      return isLoading;
  }
}

export default loadingRestaurantsReducer;
