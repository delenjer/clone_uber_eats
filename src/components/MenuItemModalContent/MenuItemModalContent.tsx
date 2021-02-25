import React, { useState } from 'react';
// @ts-ignore
import ReactHtmlParser from 'react-html-parser';

import { IMenuItems } from '../../interface/interface';

type Props = {
  menuItems: IMenuItems;
}

export const MenuItemModalContent = ({ menuItems }: Props) => {
  const [valueRadio, setValueRadio] = useState('');

  const { data } = menuItems;

  console.log(valueRadio);

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
                            Choose up to <span>{item.maxPermitted}</span>
                          </p>
                        </div>

                        <ul className="menu-modal__options-list">
                          {
                            item.options.map((option) => (
                              <li key={option.uuid} className="menu-modal__options-item">
                                {
                                  <form action="#" className="select-meal">
                                    <label>
                                      <input
                                        type={item.maxPermitted === 1 ? 'radio' : 'checkbox' }
                                        value={`${(parseFloat(String(option.price)) / 100).toFixed(2)}`}
                                        onChange={(e) => setValueRadio(e.target.value)}
                                      />

                                      {option.title}
                                    </label>

                                    <p>{`+£ ${(parseFloat(String(option.price)) / 100).toFixed(2)}`}</p>
                                  </form>
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

            <div className="menu-modal__footer">
              <button
                className="btn add-button"
                type="button"
              >
                <span className="add-button--item">Add 1 to order</span>

                <span className="add-button--item">
                  {`£ ${(parseFloat(String(data.price)) / 100).toFixed(2)}`}
                </span>
              </button>
            </div>
          </>
        )
      }
    </div>
  );
}

