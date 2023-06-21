import React from "react";

const Title = () => {
  return (
    // JSX
    <a href='/'>
      <img
        className='logo'
        alt='logo'
        src='https://pbs.twimg.com/profile_images/1472170906625716233/wyw6zyp4_400x400.jpg'></img>
    </a>
  );
};


//REACT COMPONENT
const Header = () => {
  return (
    <div className='header'>
      <Title/>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;


