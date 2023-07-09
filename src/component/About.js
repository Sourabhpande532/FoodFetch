import React from "react";
// import { Outlet } from "react-router-dom"; Optionally you can use ProfileFunctionalComponent with the help of {OUTLET}

import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

class About extends React.Component {
  // PROPS & STATE PLACE
  constructor(props) {
    super(props);
    console.log("[Parent-constructor]:AT 1st Position The Constructor Called");
  }

  // API PLACE
  componentDidMount() {
    console.log("[Parent-componentDidMount]:At 3rd Position It API called");
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
        <Profile name={"second Child-(from:class)"} />
      </div>
    );
  }
}

export default About;

/* 
-@WHERE DO We INITIALIZED STATE, in At Constructor whenever you'r class is INITIALIZED You'r constructor is by default Called

-@How_it_STEP_BY_STEP_Rendered@ 

 *Parent Constructor
 *Parent Render 
 *First child - Constructor
 *first Child - Render 
 *second child -Constructor
 *second child -Render 
 *First Child  -ComponentDidMount 
 *Second Child  -ComponentDidMount 
 *Parent - componentDidMount
 
❓How & Why ??
 When react is Rendering the stuff first it goes in Two phase when reconcialation is happening 
-* Render Phase &  *Commit phase 
 Diagram Ref: 🔗✈️ https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

 -🎯In the Render React first finished the render phase it include first "constructor"& then "Render" methods called & fact It's very fast as compared to Commit;
 -🎯Commit Phase is the phase WHERE React Atually Modify you'r Dom Then after INITIALIZED render Then componentDidMount Updated 

 @NOTE: Who help us to convert JSX To HTML It's Obivious "BABAl" As per process First called "Constructor" Then Called "Render" here inside one it Generate the Core HTML That BABAl convert JSX To HTML it plays Key Role!!
*/









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
