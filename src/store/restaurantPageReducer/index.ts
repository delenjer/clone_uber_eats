import { SET_RESTAURANT} from './action';
import {IAction, IRestaurant } from '../../interface/interface';

export const getRestaurant = (state: IRestaurant) => state;

const restaurantPageReducer = (restaurant = [], action:IAction) => {
  switch (action.type) {
    case SET_RESTAURANT:
      return action.restaurant;

    default:
      return restaurant;
  }
}

export default restaurantPageReducer;
