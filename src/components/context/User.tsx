import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

type Props = {};

const User = (props: Props) => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "Tracy",
      email: "tracy@test.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );
};

export default User;
