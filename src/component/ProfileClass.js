import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //CREATE STATE
    this.state = {
      count: 0,
      count2: "2nd time",
    };
    console.log("[Child- Constructor]" + this.props.name);
  }

  // COMPONENT DID UPDATE
  componentDidMount() {
    console.log("[Child - ComponentDidMount]" + this.props.name);
  }

  render() {
    // const {count} = this.state; Optionally Distructure
    console.log("[child - render]" + this.props.name);
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
export default Profile

/*

*/
