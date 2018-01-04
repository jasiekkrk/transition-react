import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Hero from "./Hero";

import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <div className="TopBar">
          <Link to="/">Home</Link>
          <Link to="/hero">Hero</Link>
        </div>
        </nav>
        <Route render={({ location }) =>
        <TransitionGroup>
          <CSSTransition key={location.pathname.split('/')[1]} timeout={500} classNames="pageSlider" mountOnEnter={true} unmountOnExit={true}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route exact path="/hero" component={Hero} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      } />

      </div>
    );
  }
}
export default App;