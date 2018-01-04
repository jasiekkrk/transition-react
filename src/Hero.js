import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Hero extends Component {
 render() {
  return (
   <div className="page hero">
   <Link to="/" className='close'>X</Link>
   <img className = "articleHero large" src="https://upload.wikimedia.org/wikipedia/commons/5/52/Krak%C3%B3w_239a.jpg"/>
    <h1>Lost in krakow</h1>
    <p>By Andrzej Jasiński</p>
   </div>
  )
 }
}