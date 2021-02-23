import { IMenuItems, IAction } from "../../interface/interface";
import { SET_MENU_ITEMS } from './action';

export const getMenuItems = (state: IMenuItems) => state;

const restaurantMenuItemsReducer = (menuItems = [], action: IAction) => {
  switch (action.type) {
    case SET_MENU_ITEMS:
      return action.items;

    default:
      return menuItems;
  }
}

export default restaurantMenuItemsReducer;
