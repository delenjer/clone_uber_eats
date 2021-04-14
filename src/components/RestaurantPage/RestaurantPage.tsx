import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { IState } from '../../interface/interface';
import { getRestaurantMemo } from '../../store/store';
import { loadingRestaurant } from '../../store/thunk/thunk';
import { RestaurantList } from "../RestaurantList/RestaurantList";
import { matchI } from '../../interface/interface';
import { Spinner } from "../Spinner/Spinner";
import * as selectors from "../../store/store";

export const RestaurantPage:React.FC = () => {
  const match:matchI = useRouteMatch();
  const dispatch = useDispatch();
  const isLoading = useSelector((state: IState) => selectors.isLoadingRestaurants(state));
  const restaurant = useSelector((state: IState) => getRestaurantMemo(state));
  const { heroImageUrls, title, categories, location }: any = restaurant && restaurant;

  useEffect(() => {
    dispatch(loadingRestaurant(match.params.uuid));
  }, []);

  const ImageUrl = () => {
    return heroImageUrls && heroImageUrls
      .filter((imgSort: {width: number, url: string}) => imgSort.width === 2880)
      .map((img: {width: number, url: string}) => img.url);
  }

  return (
    <>
      {
        isLoading ? (
          <Spinner />
        ) : (
          <section className="restaurant">
            <div
              className="restaurant__header"
              style={{ backgroundImage: `url(${ImageUrl()})` }}
            >
              <article className="restaurant__info">
                <h1 className="restaurant__main-title">{title}</h1>

                <p className="restaurants__categories">{`${categories && categories.join(` • `)}`}</p>

                <p className="restaurant__location">
                  {
                    location && `${location.address} ${location.country}`
                  }
                  <a className="restaurant__location--link" href="/">• More info</a>
                </p>
              </article>
            </div>

            <RestaurantList
              restaurant={restaurant}
            />
          </section>
        )
      }
    </>
  );
}
