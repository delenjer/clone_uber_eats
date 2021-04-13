import { SET_LOCATION, SET_ID_LOCATION } from './action';
import { IAction, ILocation } from "../../interface/interface";

const initialState = {
  location: {},
  id: 'f6019ddf-0413-4024-b3e6-e949d8609c56',
}

export const locationRestaurants = (state: ILocation) => state;

const locationRestaurantsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.isLocation,
      };

    case SET_ID_LOCATION:
      return {
        ...state,
        id: action.idLocation,
      };

    default:
      return state;
  }
}

export default locationRestaurantsReducer;
