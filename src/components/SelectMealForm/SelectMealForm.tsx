import React from 'react';
import { Input } from '../Input/Input';

export const SelectMealForm: React.FC<any> = (
  {
    option,
  }
) => (
  <form action="#" className="select-meal">
    <Input  value="1" checked className="select-meal__input" onChange={() => {}} type="radio" />

    <p>{`+£ ${(parseFloat(String(option.price)) / 100).toFixed(2)}`}</p>
  </form>
);
