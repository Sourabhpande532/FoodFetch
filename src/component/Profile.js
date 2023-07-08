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
