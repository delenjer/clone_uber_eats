import React, { useState, useEffect } from 'react';
import { ModalBody } from './ModalBody';

export const ModalWindow = (props: any) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setActive(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={isActive ? 'active-modal modal-wrap' : 'modal-wrap'}>
      <ModalBody>
        {props.children}
      </ModalBody>
    </div>
  );
}
