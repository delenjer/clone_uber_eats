//@ts-ignore
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingRestaurants } from '../../store/thunk/thunk';
import { getRestaurantsMemo } from '../../store/store';
import { RestaurantsItem } from "../RestaurantsItem/RestaurantsItem";
import { IState, IRestaurants } from '../../interface/interface';
import *as selectors from '../../store/store';
import { Spinner } from "../Spinner/Spinner";

export const RestaurantsList: React.FC = () => {
  const restaurants = useSelector((state: IState) => getRestaurantsMemo(state));
  const isLoading = useSelector((state: IState) => selectors.isLoadingRestaurants(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingRestaurants());
  }, []);

  return (
    <>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <div className="main-wrapper">
            <section className="restaurant">
              <ul className="restaurant__list">
                {
                  restaurants.map((restaurant: IRestaurants) => (
                    <RestaurantsItem key={restaurant.uuid} restaurant={restaurant} />
                  ))
                }
              </ul>
            </section>
          </div>
        )
      }
    </>
  );
}
