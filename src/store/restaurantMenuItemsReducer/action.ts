import { IMenuItems } from "../../interface/interface";

export const SET_MENU_ITEMS = 'SET_RESTAURANT_MENU_ITEMS';
export const SET_CHECKED_ITEMS = 'SET_CHECKED_ITEMS';

export const setMenuItems = (items: IMenuItems) => ({
  type: SET_MENU_ITEMS,
  items,
});

export const setChecked = (check: boolean) => ({
  type: SET_CHECKED_ITEMS,
  check,
});
