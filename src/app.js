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
const Header = () => {
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

const Body = () => {
  return (
    <div className="restaurant-list">
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
      <RestrauntCart />
    </div>
  );
};
const Footer = () => {
  return <h3>Footer</h3>;
};

const burgarKing = {
  name: "Burgar King",
  image:
    "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
  cusines: ["Burgar", "American"],
  rating: "4.5",
};

const RestrauntCart = () => {
  return (
    <div className='card'>
      <img alt='logo' src={burgarKing.image} />
      <h2>{burgarKing.name}</h2>
      <h4>{burgarKing.cusines.join(",")}</h4>
      <h5>{burgarKing.rating}</h5>
    </div>
  );
};



const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      {Footer()}
    </React.Fragment>
  );
};

const roots = ReactDOM.createRoot(document.getElementById("root"));
// roots.render(<HeaderComponent />);
roots.render(<AppLayout />);
