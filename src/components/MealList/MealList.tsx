import React, { useState } from 'react';
import { SelectMealInput } from "../SelectMealInput/SelectMealInput";

import { roundingNumbers } from '../../helper/helper';

export const MealList: React.FC<any> = (
  {
    item,
    menuItems,
    handleCheckedCheckbox,
    handleCheckedRadio,
  }
) => {
  const [optionId, setOptionId] = useState('');

  return (
    <ul className="menu-modal__options-list">
      {
        item.options.map((option: any, i: number) => (
          <li key={option.uuid} className="menu-modal__options-item">
            {
              <div className="select-meal">
                <SelectMealInput
                  item={item}
                  option={option}
                  i={i}
                  optionId={optionId}
                  setOptionId={setOptionId}
                  menuItems={menuItems}
                  handleCheckedCheckbox={handleCheckedCheckbox}
                  handleCheckedRadio={handleCheckedRadio}
                />

                <p>{`+£ ${roundingNumbers(option.price)}`}</p>
              </div>
            }
          </li>
        ))
      }
    </ul>
  );
};
