import React, { useState, useEffect } from "react";
import "./Nav.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

import data__links from "./data__links";

function Nav(props) {
  const { openSidebar, closeSidebar } = props;
  const [show, handleShow] = useState(false);

  const displaySidebar = (e) => {
    const tempBtn = e.target.getBoundingClientRect();
    console.log(tempBtn);
    const center = tempBtn.left - 100;
    const bottom = tempBtn.bottom + 20;

    openSidebar({ center, bottom });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else handleShow(false);
      });
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__left">
        <Link to={"/"} className="homeLink">
          <img
            className="nav__logo__img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"
          />
        </Link>

        <div>
          <ul className="nav__List">
            <li className="nav__tab nav__browse">
              <button
                className="browse__arrow"
                onMouseOver={displaySidebar}
                onClick={displaySidebar}
              >
                Browse
              </button>
            </li>

            {data__links.map((item) => {
              const { page, href } = item;
              return (
                <li key={page} className="nav__tab nav__others">
                  <a href={href}>{page}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="nav__right">
        <Link to={`/search`} className="searchLink">
          <SearchIcon className="searchIcon" />
        </Link>
        <img
          className="nav__avatar"
          src="https://occ-0-1174-1167.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABaPolEEq5s2QRP_CDO2Y0XKN6lbRAkH-S-B5XcfR-7xdSV2k-1VPzx54xaySu7czNLu8U4t5Q8lhLZMzIBPgxcA.png?r=a41"
          alt="Avatar Logo"
          onMouseOver={closeSidebar}
        />
      </div>
    </div>
  );
}

export default Nav;
