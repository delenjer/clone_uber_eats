import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadingRestaurants } from '../../store/thunk/thunk';
import { getRestaurantsMemo } from '../../store/store';
import { RestaurantsItem } from "../RestaurantsItem/RestaurantsItem";
import { IState, IRestaurants } from '../../interface/interface';
import { setItems } from '../../store/restaurantsReducer/action';
import *as selectors from '../../store/store';
import { Spinner } from "../Spinner/Spinner";

export const RestaurantsList: React.FC = () => {
  const restaurantsData = useSelector((state: IState) => getRestaurantsMemo(state));
  const restaurantsOptions = useSelector((state: IState) => selectors.getRestaurants(state));
  const isLoading = useSelector((state: IState) => selectors.isLoadingRestaurants(state));
  const dispatch = useDispatch();

  const { initItems, addedItems } = restaurantsOptions;
  let currItems = initItems + addedItems;
  const restaurants = [...restaurantsData].slice(0, currItems);
  let disabledButton = restaurantsData.length <= restaurants.length;

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

            <button
              disabled={disabledButton}
              onClick={() => dispatch(setItems(restaurantsOptions.addedItems + 4))}
              type="button">
                Add restaurants
            </button>
          </div>
        )
      }
    </>
  );
}
