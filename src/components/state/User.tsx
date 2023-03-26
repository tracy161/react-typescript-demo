import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = (props: AuthUser) => {
  const [user, setUser] = useState<AuthUser | null>(null); // user can be null or Authuser
  const handleLogin = () => {
    setUser({
      name: "Tracy",
      email: "test@test.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is{user?.email}</div>
    </div>
  );
};
