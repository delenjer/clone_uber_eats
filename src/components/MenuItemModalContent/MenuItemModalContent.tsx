import React, {useState} from 'react';

import { IMenuItems } from '../../interface/interface';
import { MealList } from '../MealList/MealList';

type Props = {
  menuItems: IMenuItems;
}

export const MenuItemModalContent = ({ menuItems }: Props) => {
  const [inputRadioValue, setInputRadioValue] = useState({});
  //@ts-ignore
  const [targetValue, setTargetValue] = useState('');
  const { data } = menuItems.menuItems;

  console.log(inputRadioValue);

  const sumMenuChoose = (initialPrice: string) => {
    const num = Object.values(inputRadioValue);

    const sum:any = num.reduce((acc:any, num) => acc + Number(num), 0);

    return (sum + Number(initialPrice)).toFixed(2);
  }

  //@ts-ignore
  const handleChecked = (e: any) => {
    // console.log(e.target.value);
    // console.log(e.target.checked);
    setTargetValue(e.target.value);

    if(e.target.checked === false) {
      //setInputRadioValue(inputRadioValue.filter(item => item !== targetValue));
    }
  }

  const handleRadioInput = (value: string, id: string) => {
    setInputRadioValue({
      ...inputRadioValue,
      [id]: {
        value,
      },
    });
  }

  return (
    <div className="menu-modal">
      {
        !data ? (
          <p>NO menu</p>
        ) : (
          <>
            <div className="menu-modal__header">
              <img className="menu-modal__img" src={data.imageUrl} alt="Img"/>

              <h1 className="menu-modal__main-title">{data.title}</h1>

              <p className="menu-modal__description">
                {data.itemDescription}
              </p>
            </div>

            <ul className="menu-modal__list">
              {
                data.customizationsList.map(item => (
                  <li key={item.uuid}>
                    {
                      <>
                        <div className="menu-modal__list-title-wrap">
                          <h3 className="menu-modal__list-title" style={{fontWeight: 'bold',}}>{item.title}</h3>
                          <p className="menu-modal__list-title--text">
                            Choose up to <span>{item.maxPermitted}</span>
                          </p>
                        </div>

                        <MealList
                          item={item}
                          inputRadioValue={inputRadioValue}
                          setInputRadioValue={setInputRadioValue}
                          menuItems={menuItems}
                          handleChecked={handleChecked}
                          handleRadioInput={handleRadioInput}
                        />
                      </>
                    }
                  </li>
                ))
              }
            </ul>

            <div className="menu-modal__footer">
              <button
                className="btn add-button"
                type="button"
              >
                <span className="add-button--item">Add 1 to order</span>

                <span className="add-button--item">
                  {`£ ${sumMenuChoose(`${(parseFloat(String(data.price)) / 100).toFixed(2)}`)}`}
                  {/*{`${(parseFloat(String(data.price)) / 100).toFixed(2)}`}*/}
                </span>
              </button>
            </div>
          </>
        )
      }
    </div>
  );
}

