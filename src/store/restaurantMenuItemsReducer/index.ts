import { SET_MENU_ITEMS } from './action';

export const getMenuItems = (state: any) => state;

const restaurantMenuItemsReducer = (menuItems = [], action: any) => {
  switch (action.type) {
    case SET_MENU_ITEMS:
      return action.items;

    default:
      return menuItems;
  }
}

export default restaurantMenuItemsReducer;
