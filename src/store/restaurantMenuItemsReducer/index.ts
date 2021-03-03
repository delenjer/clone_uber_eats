import { IMenuItems, IAction } from "../../interface/interface";
import { SET_MENU_ITEMS, SET_CHECKED_ITEMS } from './action';

const initialState = {
  menuItems: {},
  isChecked: false,
};

export const getMenuItems = (state: IMenuItems) => state;

const restaurantMenuItemsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_MENU_ITEMS:
      return {
        ...state,
        menuItems: action.items,
      };

    case SET_CHECKED_ITEMS:
      return {
        ...state,
        isChecked: action.check,
      };

    default:
      return state;
  }
}

export default restaurantMenuItemsReducer;
