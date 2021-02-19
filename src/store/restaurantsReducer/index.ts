import { SET_RESTAURANTS, SET_ITEMS } from './action';
import {IAction } from '../../interface/interface';

const initialState = {
  restaurants: [],
  initItems: 8,
  addedItems: 0,
}

export const getRestaurants = (state: any) => state;

const restaurantsReducer = (state = initialState, action:IAction) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.restaurants,
      };

    case SET_ITEMS:
      return {
        ...state,
        addedItems: action.num,
      };

    default:
      return state;
  }
}

export default restaurantsReducer;
