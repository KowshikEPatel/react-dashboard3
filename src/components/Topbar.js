import React from 'react'
import './Topbar.css'


export default function Topbar(){
    return (
<div class="topnav" id="myTopnav">
   <a className="links">Home</a>
   <a className="links" >News</a>
   <a className="links" >Contact</a>
   <a className="links" >About</a>
   <a onClick="myFunction" href="javascript:void(0);" className="icon" >
        <i class="fa fa-bars"></i>
    </a>
</div>
    )
}

let  myFunction = ()=>{
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


