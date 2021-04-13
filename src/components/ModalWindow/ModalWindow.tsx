import React, { useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';

import { ModalBody } from './ModalBody';
import { loadingMenuItems } from '../../store/thunk/thunk';
import { MenuItemModalContent } from "../MenuItemModalContent/MenuItemModalContent";
import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";
import { matchI, historyI } from '../../interface/interface';

export const ModalWindow = () => {
  const [isActive, setActive] = useState(false);
  const wrapModal = document.querySelector('.modal-wrap');
  const menuItems = useSelector((state: IState) => selectors.getMenuItems(state));
  const dispatch = useDispatch();
  const match:matchI = useRouteMatch();
  const history:historyI = useHistory();

  useEffect(() => {
    dispatch(loadingMenuItems(match.params.uuid));
  }, [match.params.uuid]);

  useEffect(() => {
     setActive(match.isExact);
  }, [match.isExact]);

  const handleCloseModal = (e: any): void => {
    if(e.target === wrapModal) {
      history.goBack();
    }
  }

  const handleClose = (): void => {
    history.goBack();
  }

  return (
    <div
      className={isActive ? 'active-modal modal-wrap' : 'modal-wrap'}
      onClick={handleCloseModal}
    >
      <ModalBody>
        <button className="close-modal" onClick={handleClose}><span className="icon-close"/></button>

        <MenuItemModalContent
          menuItems={menuItems}
        />
      </ModalBody>
    </div>
  );
}
