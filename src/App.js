import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // NavLink,
} from "react-router-dom";

// CSS
import "./App.css";

// JS
import NavigationContainer from "./components/navigation/NavigationContainer";

// JS PAGES
import Home from "./components/pages/home";
import Restaurants from "./components/pages/restaurants";
import Stores from "./components/pages/stores";
import BusinessPage from "./components/pages/businessPage";

function App() {
  return (
    <div className="app">
      <Router>
        <div>
          <NavigationContainer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/stores" component={Stores} />
            <Route path="/businessPage" component={BusinessPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
