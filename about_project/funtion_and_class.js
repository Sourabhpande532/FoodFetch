/* 
@-------------------FUNTION_BASE_COMPONENT 
import React, { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2,setCount2] = useState(2);
  console.log("render")
  return (
    <div>
      <h1>Profile Functional Base Component</h1>
      <h3>Name:{props.name}</h3>
      <h3>F-Count:{count}</h3>
      <button
        onClick={() => {
          setCount(count+1);
          setCount2(count+1);
        }}>
        Add
      </button>
      <h3>F-Count:{count2}</h3>
    </div>
  );
};

export default Profile;
*/

/* ---------OBSERVED THE DEFFERENCE BETWEEN---------- */

/* 
@----------------------CLASS_BASE_COMPONENT
import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    //CREATE STATE
    this.state = {
      count: 0,
      count2: "2nd time",
    };
    console.log("Constructor");
  }

  // COMPONENT DID UPDATE
  componentDidMount() {
    console.log("ComponentDidMount");
  }

  render() {
    // const {count} = this.state; Optionally Distructure
    console.log("render");
    return (
      <>
        <h1>Profile Class Base Component</h1>
        <h3>Name:{this.props.name}</h3>
        <h3>XYZ:{this.props.xyz}</h3>
        <h3>C-count:{this.state.count}</h3>
        <button
          onClick={() => {
            // Do Not MUTATE STATE DIRECTLY
            // Never Do This.state = something
            this.setState({ count: 1, count2: "Become first" });
          }}>
          Update State
        </button>
        <h3>C-count:{this.state.count2}</h3>
      </>
    );
  }
}
export default Profile;



@OVERVIEW
-How do I Create STATE in Class Base COMPONENT !! 
-Take REFFERENCE of 🗃️Profile.js & 🗃️ProfileClass.js  
-In function we use STATE But,In class base We've Constructor to create STATE !
-H.W: Why do use super(props) inside Constructor(props){super(props);}
-> Ans: 
✈️🔗https://www.geeksforgeeks.org/what-is-the-purpose-of-using-super-constructor-with-props-argument-in-reactjs/
✈️🔗https://www.geeksforgeeks.org/whats-the-difference-between-super-and-superprops-in-react/
Role of Constructor: ->it is place use for initialization; when a instance of class is created/invoke while RENDERING a Constructor is called ! & this is best place to create STATEs;
-whenever you load card Constructor is called it's first Step!
-To create STATE Here Called something Know as "This.state" just similar like react gives access of this.props.name 
Q) -> Then How do I updated state By using "This.setState({count:1})"
   -> Always REMEMBER according To LifeCycle Methode First Constructor Then Render Called in Class BASE COMPONENT But In function Base COMPONENT it called after every each time render;
Q) -> How to call API Call In Function & class Base COMPONENT & what is best method ?? 
   In function we use useEffect(()=>{}) after every reder it call("First render + Then 2nd Call API(useEffect)") But in Class base Same process we apply First render & Then we'll update something So react Provide use some functionality Know as "componentDidMount" it work under lifeCycle like ["Constructor",componentDidMount,render] it render the array sequence what we mention here...   





*/
