import {  Link } from "react-router-dom";

function Header () {
  
    return  <nav className="red lighten-2">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">React Shop</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/About">About</Link></li> 
        <li><Link to="/Contacts" >Contact</Link></li> 
        
      </ul>
    </div>
  </nav>
}

export {Header}