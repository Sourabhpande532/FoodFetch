import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h3>
        {user.name}-{user.email}
      </h3>
    </div>
  );
};
export default Footer;
