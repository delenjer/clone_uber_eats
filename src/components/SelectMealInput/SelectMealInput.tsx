import React from 'react';

import { Input } from '../Input/Input';

export const SelectMealInput: React.FC<any> = (
  {
    item,
    option,
    //inputRadioValue,
    //setInputRadioValue,
    handleRadioInput,
    optionId,
    setOptionId,
    handleChecked,
  }
) => {

  return (
    <label>
      {
        item.maxPermitted === 1 && (
          <Input
            type="radio"
            value={`${(parseFloat(String(option.price)) / 100).toFixed(2)}`}
            checked={optionId === option.uuid}
            className="select-meal__input"
            onChange={(e: { target: { value: string; }; }) => {
              handleRadioInput(e.target.value, item.uuid);
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
            value={`${(parseFloat(String(option.price)) / 100).toFixed(2)}`}
            className="select-meal__input"
            onChange={(e: { target: { value: string; }; }) => {
              //setInputValue([...inputValue, e.target.value]);
              setOptionId(option.uuid);
              handleChecked(e);
            }}
          />
        )
      }

      {option.title}
    </label>
  );
};
