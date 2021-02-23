import { IMenuItems } from "../../interface/interface";

export const SET_MENU_ITEMS = 'SET_RESTAURANT_MENU_ITEMS';

export const setMenuItems = (items: IMenuItems) => ({
  type: SET_MENU_ITEMS,
  items,
});
