import React from "react";

// CSS
import "../styles/home.css";

// JS
import BusinessCard from "../businessCards/businessCards";

export default function home() {
  return (
    <div className="homePageContainer">
      <BusinessCard />
      <BusinessCard />
      <BusinessCard />
      <BusinessCard />

    </div>
  );
}
