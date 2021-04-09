import { IMenuItems, IAction } from "../../interface/interface";
import { SET_MENU_ITEMS, SET_ID_ITEMS } from './action';

const initialState = {
  menuItems: {},
  id: '',
};

export const getMenuItems = (state: IMenuItems) => state;

const restaurantMenuItemsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_MENU_ITEMS:
      return {
        ...state,
        menuItems: action.items,
      };

    case SET_ID_ITEMS:
      return {
        ...state,
        id: action.id,
      };

    default:
      return state;
  }
}

export default restaurantMenuItemsReducer;
