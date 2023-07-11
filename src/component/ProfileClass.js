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
    // this.timer = setInterval(()=>{
    //   console.log("Hellow")
    // },1000)

    const data = await fetch("https://api.github.com/users/Sourabhpande532");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("[Child - ComponentDidMount]" + this.props.name);
  }

  // COMPONENT DID UPDATE

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("CompoundWillUnmount");
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
