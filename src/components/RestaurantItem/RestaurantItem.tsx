import React from 'react';

export const RestaurantItem:React.FC<any> = ({ restaurantMenu }) => {
  console.log(restaurantMenu);

  return (
    <li className="restaurant__item">
      <h2 className="restaurant__title">{restaurantMenu.title}</h2>

      {
        restaurantMenu.itemUuids.map((itemUuid: any) => (
          <article key={itemUuid.uuid} className="card">
            <div className="card__col">
              <h3 className="card__title">{itemUuid.title}</h3>

              <p className="card__description">
                {itemUuid.description}
              </p>

              <p className="card__price">
                {itemUuid.price}
              </p>
            </div>

            <div className="card__col">
              <img src={itemUuid.imageUrl} alt={itemUuid.title}/>
            </div>
          </article>
        ))
      }
    </li>
  );
}
