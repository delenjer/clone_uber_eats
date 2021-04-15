import React from 'react';

import { Input } from '../Input/Input';
import { roundingNumbers } from '../../helper/helper';

export const SelectMealInput: React.FC<any> = (
  {
    item,
    option,
    i,
    optionId,
    setOptionId,
    handleCheckedCheckbox,
    handleCheckedRadio,
  }
) => {

  return (
    <label>
      {
        item.maxPermitted === 1 && (
          <Input
            type="radio"
            value={`${roundingNumbers(option.price)}`}
            checked={optionId === option.uuid}
            className="select-meal__input"
            onChange={(e: { target: { value: string; }; }) => {
              handleCheckedRadio(item.uuid, e.target.value);
              setOptionId(option.uuid);
            }}
          />
        )
      }

      {
        item.maxPermitted > 2 && (
          //@ts-ignore
          <Input
            type="checkbox"
            value={`${roundingNumbers(option.price)}`}
            className="select-meal__input"
            onChange={(e: { target: { value: string; }; }) => {
              setOptionId(option.uuid);
              handleCheckedCheckbox(e, i);
            }}
          />
        )
      }

      {option.title}
    </label>
  );
};
