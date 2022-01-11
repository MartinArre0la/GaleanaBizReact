import React from "react";

import { NavLink } from "react-router-dom";

// CSS
import "./NavigationContainer.css";

// JS

function NavigationContainer() {
  return (
    <div className="header">
      <div className="title">Galeana Biz</div>

      <div className="linksContainer">
        <NavLink className="links" exact to="/">
          Home
        </NavLink>
        <NavLink className="links" to="/restaurants">
          Restaurants
        </NavLink>
        {/* <NavLink className="links" to="/stores">
          St
        </NavLink> */}
      </div>
    </div>
  );
}

export default NavigationContainer;
