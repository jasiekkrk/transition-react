import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Hero extends Component {
 render() {
  return (
   <div className="page hero">
   <Link to="/">X</Link>
    <h1>Lost in krakow</h1>
    <p>Hello from a hero page!</p>
   </div>
  )
 }
}