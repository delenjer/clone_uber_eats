import { IRestaurants } from '../../interface/interface';

export const SET_RESTAURANTS = 'SET_RESTAURANTS';
export const SET_ITEMS = 'SET_ITEMS';
export const SET_QUERY = 'SET_QUERY';

export const setRestaurants = (restaurants: IRestaurants) => ({
  type: SET_RESTAURANTS,
  restaurants,
});

export const setItems = (num: number) => ({
  type: SET_ITEMS,
  num,
});

export const setQuery = (query: string) => ({
  type: SET_QUERY,
  query,
});
