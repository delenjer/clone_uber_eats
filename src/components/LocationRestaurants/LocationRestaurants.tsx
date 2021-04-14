import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { loadingLocation } from '../../store/thunk/thunk';
import { IState } from "../../interface/interface";
import * as selectors from "../../store/store";
import { setIdLocation } from '../../store/locationReducer/action';

export const LocationRestaurants = () => {
  const getLocationOptions = useSelector((state: IState) => selectors.getLocationOptions(state));
  const getLocationRestaurants = useSelector((state: IState) => selectors.getLocationRestaurants(state));
  const { id } = getLocationRestaurants;
  const dispatch = useDispatch();
  const history = useHistory();
  const locationId = localStorage.getItem('locationId') || '' ;

  useEffect(() => {
    dispatch(loadingLocation());
  }, []);

  const handleSelected = (value:string) => {
    if(history.location.pathname === '/') {
      dispatch(setIdLocation(value));
    }

    dispatch(setIdLocation(value));
    history.push('/');
    localStorage.setItem('locationId', value);
  }

  return (
    <select
      name="location"
      className="delivery-info location"
      value={!locationId ? id : locationId}
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
