import React from 'react';

export const ModalBody = (props: any) => {

  return (
    <div className="modal-content">
      <div className="modal-body">
        {props.children}
      </div>
    </div>
  );
}
