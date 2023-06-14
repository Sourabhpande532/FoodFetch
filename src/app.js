import React from "react";
import ReactDOM from "react-dom/client";

// JSX
const Heading = () => (
  <h1 id='titlee' key='namastehead'>
    Nameaste React, Functional COMPONENT E.g
  </h1>
);
// JSX
const title = () => (
  <h1>
    Nameaste React title, Functional COMPONENT E.g
  </h1>
);

// NORMAl CODE
const normalVar = (
  <p id="title" key="normalkey">This is Normal Variable Example</p>
)

// JS CODE
const x = 10;
const y = 11;
const z = x+y;


// REACT COMPONENT
const HeaderComponent = () => {
  return (
    <div>
      {<Heading/>}
      {Heading()}
      {normalVar}
      {<p>javascript JSX Code of addition{console.log(z)} {1+2}</p>}
      {<h3>Manually inject HTML code E.g </h3>}
      <h1>Hello,This is Saurabh</h1>
      <h2>Hello,This is Saurabh 2</h2>
    </div>
  );
};

const roots = ReactDOM.createRoot(document.getElementById("root"));
roots.render(<HeaderComponent/>);
