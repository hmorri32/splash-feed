import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";
import grid from "./assets/grid.png";
import list from "./assets/list.png";
import "./Header.css";

export const Header = ({ active, handleActive }) => {
  return (
    <header className="barber-header">
      <div className="nav-links">
        <NavLink
          className="barber-title"
          exact to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "#2f80ed"
          }}>
          Feed
        </NavLink>
        <NavLink
          className="barber-title"
          to="/style-guide"
          activeStyle={{
            fontWeight: "bold",
            color: "#2f80ed"
          }}>
          Style Guide
        </NavLink>
      </div>
      <Route
        exact path="/"
        render={() => (
          <div className="btns">
            <button
              className={active === 1 ? "btn grid-btn active" : "btn grid-btn"}
              onClick={() => handleActive(1)}>
              <img src={grid} alt="grid-icon" />Grid
            </button>
            <button
              className={active === 2 ? "btn grid-btn active" : "btn grid-btn"}
              onClick={() => handleActive(2)}>
              <img src={list} alt="list-icon" />List
            </button>
          </div>
        )}
      />
    </header>
  );
};

Header.propTypes = {
  active: PropTypes.number,
  handleActive: PropTypes.func
};
