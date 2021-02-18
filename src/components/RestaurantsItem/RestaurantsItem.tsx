import React from 'react';

type Props = {
  restaurant: {
    heroImageUrl: string;
    title: string;
    categories: string[];
    etaRange: {
      text: string,
    }
  }
}

export const RestaurantsItem = ({ restaurant }: Props) => {

  return (
    <li className="restaurant__item">
      <a href="/" className="restaurant__link">
        <div className="restaurant__img-box">
          <img
            src={restaurant.heroImageUrl}
            alt={restaurant.title}
            className="restaurant__img"
          />
        </div>

        <h2 className="restaurant__title">{restaurant.title}</h2>

        <p className="restaurant__categories">
          {
            `${restaurant.categories.join(` • `)}`
          }
        </p>

        <p className="restaurant__range-time">
          {
            restaurant.etaRange.text
          }
        </p>
      </a>
    </li>
  );
}
