import React from 'react';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';

export const RestaurantList:React.FC<any> = ({ restaurant }) => {
  const { sections, sectionsMap, entitiesMap } = restaurant;

  const restaurantMenus = sections && sections.map((item: any) => sectionsMap[item])
    .map((item: any) => ({
      ...item,
      itemUuids: item.itemUuids.map((itemUuid: string) => entitiesMap[itemUuid])
    }));

  return (
    <div className="main-wrapper">
      <ul className="restaurant__list">
        {
          restaurantMenus && restaurantMenus.map((restaurantMenu: any) => (
            <RestaurantItem key={restaurantMenu.uuid} restaurantMenu={restaurantMenu} />
          ))
        }
      </ul>
    </div>
  );
}
