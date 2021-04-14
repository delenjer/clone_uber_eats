import React from 'react';
import { Link } from "react-router-dom";

import { LocationRestaurants } from "../LocationRestaurants/LocationRestaurants";

export const Header = () => (
  <header className="header">
    <div className="header-wrapper">
      <Link to="/" className="logo header__logo">
        <img src="./images/logo.svg" alt="Logo" />
      </Link>

      <div className="header__services">
        <div className="header__services--col">
          <div className="header__service">
            {/*<button type="button" className="delivery-info location">*/}
            {/*  <div className="delivery-info__marker">*/}
            {/*    <img src="./images/marker.svg" alt="Logo" />*/}
            {/*  </div>*/}

            {/*  <p className="delivery-info__text">*/}
            {/*    London*/}
            {/*  </p>*/}
            {/*</button>*/}

            <LocationRestaurants />

            <button type="button" className="delivery-info delivery-box">
              <div className="delivery-info__marker">
                <img src="./images/clock.svg" alt="Logo" />
              </div>

              <p className="delivery-info__text">
                Deliver now
              </p>
            </button>
          </div>
        </div>

        <div className="header__services--col">
          <div className="header__service">
            <form className="search">
              <input name="search" id="search" className="search__input" type="text" placeholder="search"/>

              <label htmlFor="search" className="search__title">
                <img src="./images/search.svg" alt="Logo" />

                <span className="search__title--text">Search</span>
              </label>
            </form>

            <div className="sign-box">
              <button type="button" className="sign-btn btn">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);
