import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';

import { loadingMenuItems } from '../../store/thunk/thunk';
import { IState } from '../../interface/interface';
import * as selectors from "../../store/store";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const RestaurantList:React.FC<any> = ({ restaurant }) => {
  const [menuItem, setMenuItem] = useState('');
  const [isOpen, setOpen] = useState(false);
  const getMenuItems = useSelector((state: IState) => selectors.getMenuItems(state));
  const dispatch = useDispatch();
  const { sections, sectionsMap, entitiesMap } = restaurant;

  useEffect(() => {
    dispatch(loadingMenuItems(menuItem))
  }, [menuItem]);

  const handleGetItemId = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();

    setMenuItem(id);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const restaurantMenus = sections && sections.map((item: any) => sectionsMap[item])
    .map((item: any) => ({
      ...item,
      itemUuids: item.itemUuids.map((itemUuid: string) => entitiesMap[itemUuid])
    }));

  return (
    <>
      <div className="main-wrapper">
        <ul className="restaurant__list">
          {
            restaurantMenus && restaurantMenus.map((restaurantMenu: any) => (
              <RestaurantItem
                key={restaurantMenu.uuid}
                restaurantMenu={restaurantMenu}
                handleGetItemId={handleGetItemId}
              />
            ))
          }
        </ul>
      </div>

      <ModalWindow
        isOpen={isOpen}
      >
        <button className="close-modal" onClick={handleClose}>x</button>

        <img src={getMenuItems.data && getMenuItems.data.imageUrl} alt="Img"/>

        <h1>{getMenuItems.data && getMenuItems.data.title}</h1>

        <p>
          {getMenuItems.data && getMenuItems.data.itemDescription}
        </p>
      </ModalWindow>
    </>
  );
}
