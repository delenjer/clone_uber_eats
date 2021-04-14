import React, { useState } from 'react';
import { SelectMealInput } from "../SelectMealInput/SelectMealInput";

export const MealList: React.FC<any> = (
  {
    item,
    inputRadioValue,
    setInputRadioValue,
    menuItems,
    handleChecked,
    handleRadioInput,
  }
) => {
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
                  inputRadioValue={inputRadioValue}
                  setInputRadioValue={setInputRadioValue}
                  optionId={optionId}
                  setOptionId={setOptionId}
                  menuItems={menuItems}
                  handleChecked={handleChecked}
                  handleRadioInput={handleRadioInput}
                  // isChecked={isChecked}
                  // setChecked={setChecked}
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
