import React from "react";
import './homepage.css'

function Homepage({setLoginUser}) {
    return (
      <div className="homepage">
        <h1>Hello homepage</h1>
        <div className="button" onClick={()=> setLoginUser({})}>Logout</div>
      </div>
    );
  }
  
  export default Homepage;