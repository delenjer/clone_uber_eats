import React from 'react';
import { Input } from '../Input/Input';

export const SelectMealForm: React.FC<any> = (
  {
    item,
    option,
    setValueRadio,
    valueRadio,
    setItemId,
    itemId,
  }
) => (
  <form action="#" className="select-meal">
    <label>
      <Input
        type={item.maxPermitted === 1 ? 'radio' : 'checkbox' }
        value={`${(parseFloat(String(option.price)) / 100).toFixed(2)}`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValueRadio([...valueRadio, e.target.value]);
          setItemId(option.uuid);
        }}
        checked={option.uuid === itemId}
       className={`select-meal__input`}
      />

      {option.title}
    </label>

    <p>{`+£ ${(parseFloat(String(option.price)) / 100).toFixed(2)}`}</p>
  </form>
);
