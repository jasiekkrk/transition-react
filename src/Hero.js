import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Hero extends Component {
 render() {
  return (
    <div className="page hero">
        Shared by you
        <div className="wrapper-large">
                <img className = "large" src={require("./lksdv.jpg")}/>
        </div>
        <Link to="/" className='close'>X</Link>
        <main>
            <h1>Lost in krakow</h1>
            <p>By John</p>
        </main>
   </div>  

  )
 }
}