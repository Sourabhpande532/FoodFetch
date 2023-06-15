import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const Title = () => (
  <a href='/'>
    <img
      className='logo'
      alt='logo'
      src='https://pbs.twimg.com/profile_images/1472170906625716233/wyw6zyp4_400x400.jpg'></img>
  </a>
);

// REACT COMPONENT
const HeaderComponent = () => {
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
    </div>
  );
};

const AppLayout = () => {
  return {};
};

const styleObj = {
  backgroundColor: "red"
}

// NORMAl JSX CODE
const JSX = (
  <div style={styleObj}>
    <h1>JSX</h1>
    <h2>JSX small</h2>
  </div>
);


const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(<HeaderComponent />);
roots.render(JSX);
