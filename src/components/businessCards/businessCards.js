import React from "react";

import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// CSS
import "../businessCards/businessCards.css";

export default function home() {
  return (
    <div className="businessCardContainer">
      <NavLink className="businessLinks" to="/businessPage">
        <div className="businessCard">
          <div className="leftSide">
            <img src="https://media.istockphoto.com/photos/walmart-store-exterior-picture-id494315703?k=20&m=494315703&s=612x612&w=0&h=xuG4WTRPpXNN6iNDYPrhRQAPe2F55sx5VlCBuvmxWyU=" />
          </div>
          <div className="rightSide">
            <div className="nameOfBusiness">Wallmart</div>
            <div className="whatTheBusinessDoes">Description</div>
            <div className="locationOfBusiness">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              Lagunitas
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
