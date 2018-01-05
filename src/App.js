import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Hero from "./Hero";

import {CSSTransition, TransitionGroup} from 'react-transition-group';

const transitionMapping = {
  '': { classNames: 'zoomin', timeout: 300 },
  hero: { classNames: 'zoomout', timeout: 300 },
};

class App extends Component {
  render() {
    return (
      <div className="App">
         <Route render={({ location }) =>
         {
          const current = location.pathname.split('/')[1];
           return <TransitionGroup>
          <CSSTransition key={location.pathname.split('/')[1]} {...transitionMapping[current]} mountOnEnter={true} unmountOnExit={true}>
            <Switch location={location}>
              <Route exact path="/" component={Home} />
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