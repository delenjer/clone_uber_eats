import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//@ts-ignore
import { useHistory, Redirect } from "react-router-dom";

import { loadingLocation } from '../../store/thunk/thunk';
import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";
import { setIdLocation } from '../../store/locationReducer/action';

export const LocationRestaurants = () => {
  const getLocationOptions = useSelector((state: IState) => selectors.getLocationOptions(state));
  //@ts-ignore
  const getLocationRestaurants:any = useSelector((state: IState) => selectors.getLocationRestaurants(state));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadingLocation());
  }, []);

  const handleSelected = (value:string) => {
    if(history.location.pathname === '/') {
      dispatch(setIdLocation(value));
    }

    dispatch(setIdLocation(value));
    history.push('/');

    localStorage.setItem('value', value);
  }

  // console.log(getStorageValue + ' storage');

  return (
    <select
      name="location"
      className="delivery-info location"
      //@ts-ignore
      onChange={(e) => handleSelected(e.target.value)}
    >
      {
        getLocationOptions.map(({ id, title }) => (
          <option key={id} value={id}>
            {title}
          </option>
        ))
      }
    </select>
  );
};
