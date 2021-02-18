import { SET_RESTAURANTS } from './action';
import {IAction } from '../../interface/interface';

export const getRestaurants = (state: any) => state;

const restaurantsReducer = (restaurants = [], action:IAction) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return action.restaurants;

    default:
      return restaurants;
  }
}

export default restaurantsReducer;
