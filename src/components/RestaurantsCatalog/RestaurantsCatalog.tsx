import React, { useEffect } from 'react';
//@ts-ignore
import { useSelector, useDispatch } from 'react-redux';

import { loadingRestaurants } from '../../store/thunk/thunk';
import { getRestaurantsMemo } from '../../store/store';

export const RestaurantsCatalog = () => {
  const getRestaurants = useSelector(state => getRestaurantsMemo(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingRestaurants());
  }, []);

  // @ts-ignore
  console.log(getRestaurants);

  return (
    <h1>Restaurants</h1>
  );
}
