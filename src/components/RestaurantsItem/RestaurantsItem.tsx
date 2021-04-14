import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  restaurant: {
    heroImageUrl: string;
    title: string;
    categories: string[];
    etaRange: {
      text: string,
    };
    uuid: string;
  }
}

export const RestaurantsItem = ({ restaurant }: Props) => {

  return (
    <li className="restaurants__item">
      <Link
        to={{
          pathname: `/restaurant-page/${restaurant.uuid}`,
        }}
        className="restaurants__link"
      >
        <div className="restaurants__img-box">
          <img
            src={restaurant.heroImageUrl}
            alt={restaurant.title}
            className="restaurants__img"
          />
        </div>

        <h2 className="restaurants__title">{restaurant.title}</h2>

        <p className="restaurants__categories">
          {
            `${restaurant.categories.join(` • `)}`
          }
        </p>

        <p className="restaurants__range-time">
          {
            restaurant.etaRange.text
          }
        </p>
      </Link>
    </li>
  );
}
