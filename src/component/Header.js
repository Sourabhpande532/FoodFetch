import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png"


const loggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    // JSX
    <a href='/'>
      <img
        className='logo'
        alt='logo'
        src={Logo}></img>
    </a>
  );
};

//REACT COMPONENT
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* TERNARY OPERATOR */}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
