import React, { useContext, useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// const loggedInUser = () => {
//   return true;
// };

const Title = () => {
  return (
    // JSX
    <a href='/'>
      <img className=' h-28 py-2' alt='logo' src={Logo}></img>
    </a>
  );
};

//REACT COMPONENT
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  return (
    <div className='flex space-x-0 justify-between bg-fuchsia-300 shadow-lg sm:bg-red-500 md:bg-yellow-300 lg:bg-purple-950'>
      <Title />
      <div className='nav-items'>
        <ul className='flex py-10 gap-4 text-white'>
          <li className='hover:text-red-400'>
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
          <li>
            <Link to='/instamart'>instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{isOnline ? "💹" : "🔴"}</h1>
      {/* USE CONTAX */}
      <span className='text-white font-bold'>{user.name}</span>
      {/* TERNARY OPERATOR */}
      {isLoggedIn ? (
        <button className=' text-white' onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className=' text-white' onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
