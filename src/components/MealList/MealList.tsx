import React, { useState } from 'react';
import { SelectMealInput } from "../SelectMealInput/SelectMealInput";

export const MealList: React.FC<any> = ({ item }) => {
  //@ts-ignore
  const [valueRadio, setValueRadio] = useState([]);
  const [optionId, setOptionId] = useState('');

  return (
    <ul className="menu-modal__options-list">
      {
        item.options.map((option: any) => (
          <li key={option.uuid} className="menu-modal__options-item">
            {
              <div className="select-meal">
                <SelectMealInput
                  item={item}
                  option={option}
                  valueRadio={valueRadio}
                  setValueRadio={setValueRadio}
                  optionId={optionId}
                  setOptionId={setOptionId}
                />

                <p>{`+£ ${(parseFloat(String(option.price)) / 100).toFixed(2)}`}</p>
              </div>
            }
          </li>
        ))
      }
    </ul>
  );
};
