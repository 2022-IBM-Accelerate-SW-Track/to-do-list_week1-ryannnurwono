import React, { Component } from 'react';
import "./About.css";
import profile from "../assets/profile.jpeg";
export default class About extends Component {
  render() {
    return (
      <div>
         <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          // Image goes here
          src = {profile}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Ryan James Nurwono</div>
        <div className = "brief_description"><p>Hi! I'm a rising sophomore EECS major at UC Berkeley. Here is my ranking of the top 10 NBA players of all time.</p>
        <ol>
          <li>Michael Jordan</li>
          <li>Lebron James</li>
          <li>Kareem Abdul-Jabbar</li>
          <li>Magic Johnson</li>
          <li>Larry Bird</li>
          <li>Stephen Curry</li>
          <li>Shaquille O'Neal</li>
          <li>Bill Russell</li>
          <li>Kobe Bryant</li>
          <li>Alex Caruso</li>
        </ol>
        </div>
        <div className="brief_description">
          
        </div>
      </div>
    </div>
  </div>

      </div>

    )
  }
}