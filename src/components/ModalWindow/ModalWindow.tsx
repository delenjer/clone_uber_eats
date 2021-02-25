import React, { useState, useEffect } from 'react';
import { ModalBody } from './ModalBody';

export const ModalWindow = (props: any) => {
  const [isActive, setActive] = useState(false);
  const wrapModal = document.querySelector('.modal-wrap');

  useEffect(() => {
    setActive(props.isOpen);
  }, [props.isOpen]);

  const handleCloseModal = (e: any): void => {
    if(e.target === wrapModal) {
      return props.isHideWrapModal();
    }
  }

  return (
    <div
      className={isActive ? 'active-modal modal-wrap' : 'modal-wrap'}
      onClick={handleCloseModal}
    >
      <ModalBody>
        {props.children}
      </ModalBody>
    </div>
  );
}
