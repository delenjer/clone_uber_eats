import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InfiniteScroll from "react-infinite-scroll-component";

import { loadingRestaurants } from '../../store/thunk/thunk';
import { getRestaurantsMemo } from '../../store/store';
import { RestaurantsItem } from "../RestaurantsItem/RestaurantsItem";
import { IState, IRestaurants } from '../../interface/interface';
import { setItems } from '../../store/restaurantsReducer/action';
import *as selectors from '../../store/store';
import { Spinner } from "../Spinner/Spinner";

export const RestaurantsList: React.FC = () => {
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();
  const restaurantsData = useSelector((state: IState) => getRestaurantsMemo(state));
  const restaurantsOptions = useSelector((state: IState) => selectors.getRestaurants(state));
  const isLoading = useSelector((state: IState) => selectors.isLoadingRestaurants(state));
  const getLocationRestaurants = useSelector((state: IState) => selectors.getLocationRestaurants(state));
  const { id } = getLocationRestaurants;
  const { initItems, addedItems } = restaurantsOptions;
  let currItems = initItems + addedItems;
  const restaurants = [...restaurantsData].slice(0, currItems);
  const locationId = localStorage.getItem('locationId') || '';

  useEffect(() => {
    if(locationId === null || locationId === '') {
      dispatch(loadingRestaurants(id));
    } else {
      dispatch(loadingRestaurants(locationId));
    }
  }, [id, locationId]);

  const fetchMoreData = () => {
    if (restaurants.length >= restaurantsData.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      dispatch(setItems(restaurantsOptions.addedItems + 8));
    }, 500);
  }

  return (
    <>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <div className="main-wrapper">
            <InfiniteScroll
              dataLength={restaurants.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<div className="loader">Loading...</div>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
            >
              <section className="restaurants">
                <ul className="restaurants__list">
                  {
                    restaurants.map((restaurant: IRestaurants) => (
                      <RestaurantsItem key={restaurant.uuid} restaurant={restaurant} />
                    ))
                  }
                </ul>
              </section>
            </InfiniteScroll>
          </div>
        )
      }
    </>
  );
}
