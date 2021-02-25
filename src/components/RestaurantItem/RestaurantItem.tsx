import React from 'react';
import { Link } from 'react-router-dom';

export const RestaurantItem:React.FC<any> = ({ restaurantMenu, handleGetItemId }) => (
  <li className="restaurant__item">
    <h2 className="restaurant__title">{restaurantMenu.title}</h2>

    <section className="card-container">
      {
        restaurantMenu.itemUuids.map((itemUuid: any) => (
          <Link
            to="/" key={itemUuid.uuid}
            className="card"
            onClick={(e) => handleGetItemId(e, itemUuid.uuid)}
          >
            <div className="card__col card__col--content">
              <h3 className="card__title">{itemUuid.title}</h3>

              <p className="card__description">
                {itemUuid.description}
              </p>

              <p className="card__price">
                {`£ ${(parseFloat(itemUuid.price) / 100).toFixed(2)}`}
              </p>
            </div>

            <div className="card__col card__col--img-box">
              <img className="card__img" src={itemUuid.imageUrl} alt={itemUuid.title}/>
            </div>
          </Link>
        ))
      }
    </section>
  </li>
);
