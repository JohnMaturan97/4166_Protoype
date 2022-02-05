import React from "react";
import "./DefaultLayout.css";


function DefaultLayout(props) {
  return (
    <div>
      <div className="header">
      <div class="topnav">
        <a class="active" href="/">
          Andromeda
        </a>
      
       <a href="/Register">Register</a>
        <a href="/Login">Login</a>
         <a href="/Reservation">Reservation</a>
          <a href="/home">Add Event</a>
      </div>
      </div>

      <div className="content"></div>
        {props.children}
        
        <div>
        <footer>
  <h2>FOOTER</h2>
  <p><a href="www.google.com">www.google.com</a></p>
</footer>
        </div>
    </div>
    
  );
};

export default DefaultLayout;
