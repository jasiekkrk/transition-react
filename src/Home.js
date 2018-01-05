import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Home extends Component {
 render() {
  return (
   <div className="page home">
   Shared by you
   <img className = "articleHero small" src={require("./lksdv.jpg")}/>
   <main>
        <h1>Lost in Kraków</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>
        <Link to="/hero">Zoom</Link>
    </main>
   </div>   
  )
 }
}