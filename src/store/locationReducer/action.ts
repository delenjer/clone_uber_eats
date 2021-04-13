import { ILocation } from '../../interface/interface';

export const SET_LOCATION = 'SET_LOCATION';
export const SET_ID_LOCATION = 'SET_ID_LOCATION';

export const setLocationRestaurants = (isLocation: ILocation) => ({
  type: SET_LOCATION,
  isLocation,
});

export const setIdLocation = (idLocation: string | null) => ({
  type: SET_ID_LOCATION,
  idLocation,
});
