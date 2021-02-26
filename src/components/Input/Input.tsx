import React from 'react';

type Props = {
  className: string;
  type: string;
  value: string;
  onChange: any;
  checked: boolean;
}

export const Input = (props:Props) => (
  <input
    className={props.className}
    type={props.type}
    value={props.value}
    onChange={props.onChange}
    checked={props.checked}
  />
);
