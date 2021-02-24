import React from 'react';
// @ts-ignore
import ReactHtmlParser from 'react-html-parser';

import { IMenuItems } from '../../interface/interface';

type Props = {
  menuItems: IMenuItems;
}

export const MenuItemModalContent = ({ menuItems }: Props) => {
  const { data } = menuItems;

  // const itemDescription = (): any => {
  //   const pattern = /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/g;
  //
  //   if(data) {
  //     //@ts-ignore
  //     return data.itemDescription.split(' ')
  //       .map(item => {
  //         if(pattern.test(item)) {
  //           return ReactHtmlParser(<a href={'item'}>{item}</a>);
  //         }
  //
  //         return item;
  //       }).join('');
  //   }
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
                            Choose up to 1
                          </p>
                        </div>

                        <ul className="menu-modal__options-list">
                          {
                            item.options.map((option) => (
                              <li className="menu-modal__options-item">
                                {
                                  <>
                                    <h4>{option.title}</h4>

                                    <p>{`£ ${(parseFloat(String(option.price)) / 100).toFixed(2)}`}</p>
                                  </>
                                }
                              </li>
                            ))
                          }
                        </ul>
                      </>
                    }
                  </li>
                ))
              }
            </ul>

            <button type="button">
              {`£ ${(parseFloat(String(data.price)) / 100).toFixed(2)}`}
            </button>
          </>
        )
      }
    </div>
  );
}

