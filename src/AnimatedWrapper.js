import React, { Component } from "react";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const AnimatedWrapper = WrappedComponent => {
    return props => 
    <TransitionGroup>
    <CSSTransition
      key='...'
      classNames='fade'
      timeout={{ enter: 500, exit: 300 }}
    >
          <div>
                <WrappedComponent {...this.props} />
          </div>
          </CSSTransition>
        </TransitionGroup>
 }
export default AnimatedWrapper;