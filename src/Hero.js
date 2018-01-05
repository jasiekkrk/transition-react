import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Hero extends Component {
 render() {
  return (
    <div className="page hero">
   Shared by you
   <div className = "articleHero large">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/5/52/Krak%C3%B3w_239a.jpg"/>
   </div>
   <main>
    <h1>Lost in krakow</h1>
    <Link to="/" className='close'>X</Link>
    <p>By John</p>
    </main>
   </div>  

  )
 }
}