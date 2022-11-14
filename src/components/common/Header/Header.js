import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from './home.png'
import cartIcon from './cart.png'



const Header = () => {
  const activeStyle = { 
    position: 'absolute',
    width: '3440px',
    
    left: '0px',
    top: '0px',
    
    background: '#F28B11' 
};

 
   
  return (
    <nav >
      
      <NavLink to="/" style={activeStyle} exact>
      <img src={homeIcon} alt=""/>  &nbsp;
       HOME &nbsp; {" | "} &nbsp;
       <NavLink to="/cart" > 
      <img src={cartIcon} alt=""/> &nbsp;CART 
      </NavLink>
      </NavLink>
      
    </nav>
    
  );
};

export default Header;

