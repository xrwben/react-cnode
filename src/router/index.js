import React, { Component } from "react";
import { HashRouter as Routes, Route, Switch, Redirect } from "react-router-dom";

import Home from "../pages/home/index.jsx";
import Details from "../pages/details/index.jsx";
import About from "../pages/about/index.jsx";
import User from "../pages/user/index.jsx";

class Router extends Component {
  render () {
    return (
      // <Routes>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to="/home" />)}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/user" component={User}></Route>
        </Switch>
      // </Routes>  
    )
  }
}

export default Router;