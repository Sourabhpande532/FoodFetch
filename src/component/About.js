import React from "react";
// import { Outlet } from "react-router-dom"; Optionally you can use ProfileFunctionalComponent with the help of {OUTLET}

import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

class About extends React.Component {
  // PROPS & STATE PLACE
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "Dummy Name",
      location: "India",
    };
    console.log("[Parent-constructor]:AT 1st");
  }

  // API CALL PLACE
  componentDidMount() {
    console.log("[Parent-componentDidMount]:At 3rd");
  }

  
  //COMPONENT PLACE
  render() {
    console.log("[Parent-render]At 2nd Position it Render Called");
    return (
      <div>
        <h1>Hellow, this is About page</h1>
        <p>
          page is about Functional & CLASS base COMPONENT for UNDERSTANDING
          Perpose
        </p>
        {/* <Outlet /> */}
        <ProfileFunctionalComponent name={"Saurabh (from function)"} />
        <Profile name={"First Child-(from:class)"} />
        {/* <Profile name={"second Child-(from:class)"} /> */}
      </div>
    );
  }
}

export default About;






// FUNCTION BASE COMPONENT
// const About2 = () => {
//   return (
//     <div>
//       <h1>Hellow, this is About page</h1>
//       <p>
//         page is about Functional & CLASS base COMPONENT for UNDERSTANDING
//         Perpose
//       </p>
//       {/* <Outlet /> */}
//       <ProfileFunctionalComponent
//         name={"Saurabh,pass via Props from function"}
//       />
//       <Profile name={"Kunal,pass via Props from class"} xyz='Shankar Dadmal' />
//     </div>
//   );
// };

// export default About2;
