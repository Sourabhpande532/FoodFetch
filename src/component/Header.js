import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

// const loggedInUser = () => {
//   return true;
// };

const Title = () => {
  return (
    // JSX
    <a href='/'>
      <img className='logo' alt='logo' src={Logo}></img>
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
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
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
