import { IMenuItems } from "../../interface/interface";

export const SET_MENU_ITEMS = 'SET_RESTAURANT_MENU_ITEMS';
export const SET_ID_ITEMS = 'SET_ID_ITEMS';

export const setMenuItems = (items: IMenuItems | {}) => ({
  type: SET_MENU_ITEMS,
  items,
});

export const setMenuItemsId = (id: string) => ({
  type: SET_ID_ITEMS,
  id,
});
