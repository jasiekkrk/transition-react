import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Hero from "./Hero";

import {CSSTransition, TransitionGroup} from 'react-transition-group';

const transitionMapping = {
  zoom: { classNames: 'zoomin', timeout: 500 },
  hero: { classNames: 'zoomout', timeout: 500 },
};

class App extends Component {
  render() {
    return (
      <div className="App">
         <Route render={({ location }) =>
         {
          const current = location.pathname.split('/')[1];
           return <TransitionGroup>
          <CSSTransition key={location.pathname.split('/')[1]} timeout={500}  classNames='zoomin' mountOnEnter={true} unmountOnExit={true}>
            <Switch location={location}>
              <Route exact path="/zoom" component={Home} />
              <Route exact path="/hero" component={Hero} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
         }
      } />

      </div>
    );
  }
}
export default App;