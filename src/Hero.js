import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Hero extends Component {
 render() {
  return (
    <div className="page hero">
   Shared by you
   <img className = "articleHero large" src={require("./lksdv.jpg")}/>
   <main>
    <h1>Lost in krakow</h1>
    <Link to="/" className='close'>X</Link>
    <p>By John</p>
    </main>
   </div>  

  )
 }
}