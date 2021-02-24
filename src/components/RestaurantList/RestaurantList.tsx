import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RestaurantItem } from '../RestaurantItem/RestaurantItem';

import { loadingMenuItems } from '../../store/thunk/thunk';
import { IState } from '../../interface/interface';
import * as selectors from "../../store/store";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import { MenuItemModalContent } from "../MenuItemModalContent/MenuItemModalContent";

export const RestaurantList:React.FC<any> = ({ restaurant }) => {
  const [menuItemId, setMenuItemId] = useState('');
  const [isOpen, setOpen] = useState(false);
  const menuItems = useSelector((state: IState) => selectors.getMenuItems(state));
  const dispatch = useDispatch();
  const { sections, sectionsMap, entitiesMap } = restaurant;

  useEffect(() => {
    dispatch(loadingMenuItems(menuItemId))
  }, [menuItemId]);

  const handleGetItemId = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string): void => {
    e.preventDefault();

    setMenuItemId(id);
    setOpen(true);
  }

  const handleClose = (): void => {
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
        <button className="close-modal" onClick={handleClose}><span className="icon-close"/></button>

        <MenuItemModalContent
          menuItems={menuItems}
        />
      </ModalWindow>
    </>
  );
}
