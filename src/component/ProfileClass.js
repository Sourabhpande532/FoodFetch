import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //CREATE STATE
    this.state = {
      userInfo: "Dummy Name",
      location: "India",
    };
    console.log("[Child- Constructor]" + this.props.name);
  }

  // COMPONENT DID MOUNT FOR API CALL
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sourabhpande532");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("[Child - ComponentDidMount]" + this.props.name);
  }

  // COMPONENT DID UPDATE
   
  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }

  render() {
    // const {count,location} = this.state.userInfo; Optionally Distructure
    console.log("[child - render]" + this.props.name);
    return (
      <>
        <h1>Profile Class Base Component</h1>
        <img src={this.state?.userInfo?.avatar_url} />
        <h3>Name:{this.state?.userInfo?.name}</h3>
        <h3>Location:{this?.state?.userInfo?.location}</h3>
        <h3>UserId:{this?.state?.userInfo?.login}</h3>

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

/* 
H.w: We can use async componentDidMount But why not we use async operation with useEffect(async) !!
-useEffect runs asynchronously after a render is painted to the screen, unblocking the browser paint process.
-Why? Because React's useEffect hook expects a cleanup function returned from it which is called when the component unmounts. Using an async function here will cause a bug as the cleanup function will never get called.
Ref: 🔗✈️https://www.designcise.com/web/tutorial/why-cant-react-useeffect-callback-be-async

How we can disply Api Data on UI ??
-for that Need to create STATE inside constructor !! 
-STATE is Nothing but an big Object
-How do i STATE Data into state use this.state on componentDidMount

-😱Given:Fact Parent - componentDidMount it call befour API first first Parent-componentDidMount call then API because API take certain time to load so it FOLLOW the sequence see below 
/***
 * call.....
 * child constructor
 * child render
 * child componentDidMount 
 * 
 * Then'll Make API Call
 * set State 
 * begain to start with Updata see Diagram render.png secode Coloum 'Updata'(ComponentDidUpdate) @hint first is "Mounting" & 3rd one "Unmounting"
 * 
 * 
 * 
 *NOTE:As soon as You make an API Call inside componentDidMount you'r component Already mounted then Goes in 2nd phase "ComponentDidUpdate"
 *NOTE: MOUNT'll be called when ""after first render"" & Updata called be when "after every next render" 
 * 

*/
