import React from "react";
// import { Outlet } from "react-router-dom"; Optionally you can use ProfileFunctionalComponent with the help of {OUTLET}

import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"

const About = () => {
  return (
    <div>
      <h1>Hellow, this is About page</h1>
      <p>page is about Functional & CLASS base COMPONENT for UNDERSTANDING Perpose</p>
      {/* <Outlet /> */}
      <ProfileFunctionalComponent name={"Saurabh,pass via Props from function"}/>
      <Profile name={"Kunal,pass via Props from class"} xyz="Shankar Dadmal" />
    </div>
  );
};

export default About;
