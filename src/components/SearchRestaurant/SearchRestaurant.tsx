import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { useHistory } from "react-router-dom";

import { setQuery } from '../../store/restaurantsReducer/action';

export const SearchRestaurant = () => {
  const [userQuery, setUserQuery] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const updateQuery = () => {
    if(history.location.pathname !== '/') {
      history.push('/');
      dispatch(setQuery(userQuery));
    } else {
      dispatch(setQuery(userQuery));
    }
  };

  const delayedQuery = useCallback(debounce(updateQuery, 500), [userQuery]);

  const handleValue = (value:string) => {
    setUserQuery(value);
  }

  useEffect(() => {
    delayedQuery();
  }, [userQuery, delayedQuery]);

  return (
    <form className="search">
      <input
        name="search"
        id="search"
        className="search__input"
        type="text"
        placeholder="search"
        value={userQuery}
        onChange={(e) => handleValue(e.target.value)}
      />

      <label htmlFor="search" className="search__title">
        <img src="./images/search.svg" alt="Logo" />
      </label>
    </form>
  );
}
