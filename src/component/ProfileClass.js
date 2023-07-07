import React from "react";
class Profile extends React.Component {
  render() {
    return <>
    <h1>Profile Class Base Component</h1>
    <h3>Name:{this.props.name}</h3>
    <h3>XYZ:{this.props.xyz}</h3>
    </>
  }
}
export default Profile;

/*
-React.Component comes from React
-Can't create class base Component Without render() Methode
-in function COMPONENT return JSX But inside Class base COMPONENT "render" method return "JSX"
-whatever you return it inject on our DOM 
-What is extends?
=> it is a class that needs to be inherit some properties in This react do such thing this is how react know this is class base COMPONENT
 -So How do i pass props inside Class base COMPONENT??
 => Use simply {this.props.name} 
-So when the react Tracking COMPONENT it takes this props & attach to this keyword;
 -Props it's an object at end of the it play a key role  
*/
