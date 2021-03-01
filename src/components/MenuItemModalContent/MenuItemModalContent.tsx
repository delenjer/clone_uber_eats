import React from 'react';

import { IMenuItems } from '../../interface/interface';
import { MealList } from '../MealList/MealList';

type Props = {
  menuItems: IMenuItems;
}

export const MenuItemModalContent = ({ menuItems }: Props) => {
  const { data } = menuItems;


  // const sumMenuChoose = (initialPrice: string) => {
  //   const sum = valueRadio.reduce((acc, num) => acc + Number(num), 0);
  //
  //   return (sum + Number(initialPrice)).toFixed(2);
  // }

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

                        <MealList item={item} />
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
                  {/*{`£ ${sumMenuChoose(`${(parseFloat(String(data.price)) / 100).toFixed(2)}`)}`}*/}
                  {`${(parseFloat(String(data.price)) / 100).toFixed(2)}`}
                </span>
              </button>
            </div>
          </>
        )
      }
    </div>
  );
}

